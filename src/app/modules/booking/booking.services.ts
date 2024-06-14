import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TBooking } from './booking.interface'
import { Booking } from './booking.model'
import { JwtPayload } from 'jsonwebtoken'

const createRentalIntoDB = async (payload: TBooking) => {
  try {
    const result = ''
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Rent a bake')
  }
}

const getAllRentalsForUserFromDB = async () => {
  try {
    const result = await ''
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Rental retrieved failed')
  }
}

const returnBikeIntoDB = async () => {
  try {
    const result = ''
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update Return Bike')
  }
}

export const BookingServices = {
  createRentalIntoDB,
  returnBikeIntoDB,
  getAllRentalsForUserFromDB,
}
