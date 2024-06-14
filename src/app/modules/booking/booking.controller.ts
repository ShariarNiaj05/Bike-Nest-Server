import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BookingServices } from './booking.services'

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
  const result = await BookingServices.getAllRentalsForUserFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully',
    data: result,
  })
})

const returnBike = catchAsync(async (req, res) => {
  const result = await BookingServices.returnBikeIntoDB()

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
}
