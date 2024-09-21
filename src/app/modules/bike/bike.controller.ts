import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BikeServices } from './bike.services'

const createBike = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikeIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike added successfully',
    data: result,
  })
})

const getAllBike = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikeFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes retrieved successfully',
    data: result,
  })
})
const getBikeDetails = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BikeServices.getBikeDetailsFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes retrieved successfully',
    data: result,
  })
})
const updateBike = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BikeServices.updateBikeIntoDB(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike updated successfully',
    data: result,
  })
})

const deleteBike = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BikeServices.deleteBikeFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike deleted successfully',
    data: result,
  })
})

export const BikeControllers = {
  createBike,
  getAllBike,
  updateBike,
  deleteBike,
}
