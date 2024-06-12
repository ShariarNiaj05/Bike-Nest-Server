import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TUser } from './user.interface'
import { User } from './user.model'

const createUserIntoDB = async (payload: TUser) => {
  try {
    const result = await User.create(payload)
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create User')
  }
}

export const UserServices = {
  createUserIntoDB,
}
