import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TBike } from './bike.interface'
import { Bike } from './bike.model'
import { JwtPayload } from 'jsonwebtoken'

const createBikeIntoDB = async (payload: TBike) => {
  try {
    const result = await Bike.create(payload)
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Bike')
  }
}

const getAllBikeFromDB = async () => {
  try {
    const result = await Bike.find()
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to retrieved Bike')
  }
}
const getBikeDetailsFromDB = async (id: string) => {
  try {
    const result = await Bike.findById(id)
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to retrieved Bike')
  }
}

const updateBikeIntoDB = async (id: string, payload: Partial<TBike>) => {
  try {
    const result = await Bike.findByIdAndUpdate(id, payload, {
      upsert: true,
      new: true,
      runValidators: true,
    })
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update Bike')
  }
}

const deleteBikeFromDB = async (id: string) => {
  try {
    const result = await Bike.findByIdAndDelete(id)
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to deleted bike')
  }
}

export const BikeServices = {
  createBikeIntoDB,
  getAllBikeFromDB,
  updateBikeIntoDB,
  deleteBikeFromDB,
}
