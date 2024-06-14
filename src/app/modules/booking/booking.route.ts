import { Router } from 'express'
import { BookingControllers } from './booking.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post('/', auth(USER_ROLE.user), BookingControllers.createRental)
router.get('/', auth(USER_ROLE.user), BookingControllers.getAllRentalsForUser)

export const BookingRoutes = router
