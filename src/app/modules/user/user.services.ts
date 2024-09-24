import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TUser } from './user.interface'
import { User } from './user.model'
import { JwtPayload } from 'jsonwebtoken'

const createUserIntoDB = async (payload: TUser) => {
  try {
    const result = await User.create(payload)
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create User')
  }
}

const getProfileFromDB = async (payload: JwtPayload | null) => {
  try {
    if (payload !== null) {
      const result = await User.findOne({
        email: payload.email,
      }).select('+password')
      return result
    }
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Get User')
  }
}

const updateProfileIntoDB = async (
  payload: JwtPayload | null,
  bodyPayload: Partial<TUser>,
) => {
  try {
    if (payload) {
      const email = payload.email
      const result = User.findOneAndUpdate({ email }, bodyPayload, {
        upsert: true,
        new: true,
      })
      return result
    }
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Get User')
  }
}

const getAllUsersFromDB = async () => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Get User')
  }
}
const deleteUserFromDB = async (id: string) => {
  try {
    const deleteUser = await User.findByIdAndDelete(id)

    return deleteUser
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Delete User')
  }
}

export const UserServices = {
  createUserIntoDB,
  getProfileFromDB,
  updateProfileIntoDB,
  getAllUsersFromDB,
  deleteUserFromDB,
}
