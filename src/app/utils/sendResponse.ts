import { Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'

type TResponse<T> = {
  statusCode: number
  success: boolean
  message?: string
  token?: JwtPayload | unknown | string
  data: T
}

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.sendStatus(data?.statusCode).json({
    success: data.success,
    statusCode: data?.statusCode,
    message: data.message,
    token: data.token,
    data: data.data,
  })
}

export default sendResponse
