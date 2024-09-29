import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
// import notFoundRoute from './app/middlewares/notFoundRoute'
import cookieParser from 'cookie-parser'

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

const test = async (req: Request, res: Response) => {
  // Promise.reject();
  const a = 'Bike Nest Server'
  res.send(a)
}

app.get('/', test)

app.use(globalErrorHandler)

//Not Found
app.use(notFound)

/* //route not found
app.use(notFoundRoute) */

export default app
