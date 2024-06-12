import httpStatus from 'http-status'
import config from '../../config'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from './auth.services'
import { JwtPayload } from 'jsonwebtoken'

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body)
  const { accessToken } = result

  console.log(accessToken)

  res.cookie('accessToken', {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  })
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: accessToken as JwtPayload,
    data: accessToken,
  })
})

export const AuthController = {
  loginUser,
}
