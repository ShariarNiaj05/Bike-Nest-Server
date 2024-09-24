import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'
import { UserControllers } from './user.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constant'

const router = Router()

router.post(
  '/signup',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
)
router.get(
  '/users/me',
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserControllers.getProfile,
)
router.put(
  '/users/me',
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserControllers.updateProfile,
)

router.get('/', auth(USER_ROLE.admin), getAllUsers)

export const UserRoutes = router
