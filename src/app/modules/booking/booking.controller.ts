import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BookingServices } from './booking.services'
import { JwtPayload } from 'jsonwebtoken'

const createRental = catchAsync(async (req, res) => {
  const payload = {
    rentalInformation: req.body,
    authUserInformation: req.user,
  }
  const result = await BookingServices.createRentalIntoDB(payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental created successfully',
    data: result,
  })
})

const getAllRentalsForUser = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllRentalsForUserFromDB(
    req.user as JwtPayload,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rentals retrieved successfully',
    data: result,
  })
})

const getAllBikeToBeReturn = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBikeToBeReturnFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ALL bike to be returned successful',
    data: result,
  })
})
const returnBike = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BookingServices.returnBikeIntoDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike returned successfully',
    data: result,
  })
})

export const BookingControllers = {
  createRental,
  returnBike,
  getAllRentalsForUser,
  getAllBikeToBeReturn,
}
