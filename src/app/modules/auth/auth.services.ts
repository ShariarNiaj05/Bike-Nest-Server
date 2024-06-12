import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../user/user.model'
import { TLoginUser } from './auth.interface'
import { createToken } from './auth.utils'
import config from '../../config'

const loginUser = async (payload: TLoginUser) => {
  // checking if user is exist
  const user = await User.findOne({ email: payload?.email })
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Not Found')
  }
  // checking if the user is already deleted
  /* const isDeleted = user?.isDeleted
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'User is already deleted')
  }
 */

  // checking if the password is correct by using static instance method
  /* const isPasswordMatched = await User.isPasswordMatched(
    payload?.password,
    user?.password,
  )
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password Not Matched')
  } */

  // access granted: send accessToken and refreshToken
  const jwtPayload = {
    email: user.email,
    role: user.role,
  }
  const accessToken = createToken(
    jwtPayload,
    // `Bearer ${jwtPayload} `,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  )

  return `Bearer ${accessToken}`
}

export const AuthServices = {
  loginUser,
}
