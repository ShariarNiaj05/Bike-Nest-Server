import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api', router)

const test = async (req: Request, res: Response) => {
  // Promise.reject();
  const a = 10
  res.send(a)
}

app.get('/', test)

// app.use(globalErrorHandler)

//Not Found
// app.use(notFound)

export default app
