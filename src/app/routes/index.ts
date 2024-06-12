import { Router } from 'express'
// import { demoRoute } from '../modules/scratch/scratch.route'
import { UserRoutes } from '../modules/user/user.route'

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
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
