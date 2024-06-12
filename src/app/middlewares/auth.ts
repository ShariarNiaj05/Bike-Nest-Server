import { NextFunction, Request, Response } from 'express'
import { TUserRole } from '../modules/user/user.interface'
import catchAsync from '../utils/catchAsync'
import AppError from '../errors/AppError'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log('inside auth utils')
    const token = req.headers.cookie as string
    console.log('token from middleware auth.ts', token)
    const tokenSplit = token?.split('Bearer%20')
    console.log('tokenSplit auth.ts', tokenSplit[1])

    //   check if any token available
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You're not authorized")
    }

    //   if token available, checking if the token valid or not
    const decoded = jwt.verify(
      tokenSplit[1],
      config.jwt_access_secret as string,
    ) as JwtPayload

    console.log('decoded from middleware auth.ts', decoded)
    next()
  })
}

export default auth
