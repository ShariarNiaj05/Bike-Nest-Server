import httpStatus from 'http-status'
import config from '../../config'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from './auth.services'
import { JwtPayload } from 'jsonwebtoken'

const loginUser = catchAsync(async (req, res) => {
  const accessToken = await AuthServices.loginUser(req.body)
  //   console.log('access token from controller', accessToken)

  //   console.log(accessToken)

  res.cookie('accessToken', accessToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  })
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: accessToken,
    data: accessToken,
  })
})

export const AuthController = {
  loginUser,
}
