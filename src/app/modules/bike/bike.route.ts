import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BikeValidation } from './bike.validation'
import { BikeControllers } from './bike.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(BikeValidation.bikeValidationSchema),
  BikeControllers.createBike,
)
router.get('/', BikeControllers.getAllBike)

export const BikeRoutes = router
