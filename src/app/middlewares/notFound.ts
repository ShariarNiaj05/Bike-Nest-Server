/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route Not Found !!',
    error: '',
  })
}

export default notFound
