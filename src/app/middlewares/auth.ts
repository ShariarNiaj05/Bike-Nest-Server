import { NextFunction, Request, Response } from 'express'
import { TUserRole } from '../modules/user/user.interface'
import catchAsync from '../utils/catchAsync'
import AppError from '../errors/AppError'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import { User } from '../modules/user/user.model'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.cookie as string
    const tokenSplit = token?.split('Bearer%20')

    //   check if any token available
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You're not authorized")
    }

    //   if token available, checking if the token valid or not
    const decoded = jwt.verify(
      tokenSplit[1],
      config.jwt_access_secret as string,
    ) as JwtPayload

    const { email, role } = decoded

    // checking if user is exist
    const user = await User.findOne({ email: email })
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User Not Found')
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        "You're not authorized to go forward",
      )
    }
    req.user = decoded as JwtPayload
    next()
  })
}

export default auth
