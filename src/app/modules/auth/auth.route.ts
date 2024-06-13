import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller'
// import auth from '../../middlewares/auth'
// import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post(
  '/',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
)
export const AuthRoutes = router
