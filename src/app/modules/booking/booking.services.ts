import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TBooking } from './booking.interface'
import { Booking } from './booking.model'
import { JwtPayload } from 'jsonwebtoken'
import { User } from '../user/user.model'
import { Bike } from '../bike/bike.model'
import mongoose from 'mongoose'

const createRentalIntoDB = async (payload: TBooking) => {
  const session = await mongoose.startSession()
  try {
    session.startTransaction()

    const { authUserInformation, rentalInformation } = payload
    // checking is tokenize user role is admin
    if (authUserInformation.role === 'admin') {
      throw new AppError(httpStatus.UNAUTHORIZED, "Admin can't rent a bike")
    }

    // checking if tokenize user exist or not
    const isUserExist = await User.findOne({ email: authUserInformation.email })
    if (!isUserExist) {
      throw new AppError(httpStatus.UNAUTHORIZED, "User didn't  matched")
    }
    // checking if requested bike is exist
    const bikeId = rentalInformation.bikeId
    const isBikeExist = await Bike.findById({ _id: bikeId })
    if (!isBikeExist) {
      throw new AppError(httpStatus.BAD_REQUEST, "Requested bike isn't found")
    }
    if (isBikeExist.isAvailable !== true) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Currently bike isn't available to rent",
      )
    }
    const userId = isUserExist.id
    console.log({ userId }, { bikeId })

    const newBookingInformation = {
      userId,
      bikeId: rentalInformation.bikeId,
      startTime: rentalInformation.startTime,
    }
    // updating bike isAvailable status to false
    await Bike.findByIdAndUpdate(
      bikeId,
      { isAvailable: false },
      {
        new: true,
        runValidators: true,
      },
    )

    await session.commitTransaction()
    await session.endSession()

    const result = await Booking.create(newBookingInformation)
    return result
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, `Failed to Rent a bike ${error}`)
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
