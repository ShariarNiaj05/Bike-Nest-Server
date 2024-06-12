import { Router } from 'express'
// import { demoRoute } from '../modules/scratch/scratch.route'
import { UserRoutes } from '../modules/user/user.route'
import { AuthRoutes } from '../modules/auth/auth.route'

const router = Router()

const moduleRoutes = [
  /*  {
    path: '/',
    route: demoRoute,
  }, */
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/auth/login',
    route: AuthRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
