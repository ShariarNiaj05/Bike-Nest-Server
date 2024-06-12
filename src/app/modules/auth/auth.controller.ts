import httpStatus from 'http-status'
import config from '../../config'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from './auth.services'
import { User } from '../user/user.model'
import jwt, { JwtPayload } from 'jsonwebtoken'
import AppError from '../../errors/AppError'

const loginUser = catchAsync(async (req, res) => {
  const user = await User.findOne({ email: req?.body?.email })
  const accessToken = await AuthServices.loginUser(req.body)
  const tokenSplit = accessToken?.split(' ')

  const decoded = jwt.verify(
    tokenSplit[1],
    config.jwt_access_secret as string,
  ) as JwtPayload
  const { email: decodedEmail } = decoded

  if (user?.email !== decodedEmail) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Mis Information')
  }
  res.cookie('accessToken', accessToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  })
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: accessToken,
    data: user,
  })
})

export const AuthController = {
  loginUser,
}
