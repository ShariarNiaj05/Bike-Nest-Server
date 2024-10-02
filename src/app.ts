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

// const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// application routes
app.use('/api', router)

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

const calculateOrderAmount = items => {
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  let total = 0
  items.forEach(item => {
    total += item.amount
  })
  return total
}

app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'bdt',
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
/* //route not found
app.use(notFoundRoute) */

export default app
