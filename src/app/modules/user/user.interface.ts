import { USER_ROLE } from './user.constant'

export type TUser = {
  _id?: string
  name: string
  email: string
  password: string
  phone: string
  address: string
  role?: 'admin' | 'user'
}

export type TUserRole = keyof typeof USER_ROLE
