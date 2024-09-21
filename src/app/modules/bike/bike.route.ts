import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BikeValidation } from './bike.validation'
import { BikeControllers } from './bike.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()
router.get('/', BikeControllers.getAllBike)
router.get('/:id', BikeControllers.)
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(BikeValidation.bikeValidationSchema),
  BikeControllers.createBike,
)

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(BikeValidation.updateBikeValidationSchema),
  BikeControllers.updateBike,
)
router.delete('/:id', auth(USER_ROLE.admin), BikeControllers.deleteBike)

export const BikeRoutes = router
