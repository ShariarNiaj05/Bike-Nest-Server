import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.services'

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  })
})

export const UserControllers = {
  createUser,
}
