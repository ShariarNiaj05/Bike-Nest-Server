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

const getProfile = catchAsync(async (req, res) => {
  const result = await UserServices.getProfileFromDB(req.user)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User profile retrieved successfully',
    data: result,
  })
})

const updateProfile = catchAsync(async (req, res) => {
  const result = await UserServices.updateProfileIntoDB(req.user, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: result,
  })
})

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Users Retrieved Successfully',
    data: result,
  })
})
const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.body
  const result = await UserServices.deleteUserFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Users Retrieved Successfully',
    data: result,
  })
})
const promoteUser = catchAsync(async (req, res) => {
  const { id } = req.body
  const result = await UserServices.promoteUserIntoDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Users Retrieved Successfully',
    data: result,
  })
})

export const UserControllers = {
  createUser,
  getProfile,
  updateProfile,
  getAllUsers,
  deleteUser,
}
