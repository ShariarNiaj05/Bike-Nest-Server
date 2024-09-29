import { Types } from 'mongoose'
import { TBike } from '../bike/bike.interface'
import { TUser } from '../user/user.interface'

export type TBooking = {
  userId: Types.ObjectId | TUser
  bikeId: Types.ObjectId | TBike
  startTime: Date
  returnTime: Date
  totalCost: number
  isReturned: boolean
}
