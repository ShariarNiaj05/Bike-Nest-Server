import { Router } from 'express'
import { BookingControllers } from './booking.controller'

const router = Router()

router.post('/', BookingControllers.createRental)

export const BookingRoutes = router
