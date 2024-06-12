import { Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'

type TResponse<T> = {
  statusCode: number
  success: boolean
  message?: string
  token?: JwtPayload
  data: T
}

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  if (!data.data) {
    res.status(data?.statusCode).json({
      success: false,
      message: 'No Data Found',
      data: [],
    })
  } else {
    res.status(data?.statusCode).json({
      success: data.success,
      statusCode: data?.statusCode,
      message: data.message,
      data: data.data,
    })
  }
}

export default sendResponse
