import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
// import notFoundRoute from './app/middlewares/notFoundRoute'
import cookieParser from 'cookie-parser'
import Stripe from 'stripe'
import config from './app/config'

const app: Application = express()

//parsers
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://bike-nest-client.vercel.app'],
    credentials: true,
  }),
)
app.use(cookieParser())

// application routes
app.use('/api', router)

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body

  const amountInCents = parseInt(amount, 10) * 100
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
    // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
    dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
  })
})

const test = async (req: Request, res: Response) => {
  // Promise.reject();
  const a = 'Bike Nest Server'
  res.send(a)
}

app.get('/', test)

app.use(globalErrorHandler)

//Not Found
app.use(notFound)
const stripe = new Stripe(config.stripeSecretKey as string)

/* //route not found
app.use(notFoundRoute) */

export default app
