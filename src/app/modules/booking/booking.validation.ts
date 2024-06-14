import { z } from 'zod'

const bookingValidationSchema = z.object({
  body: z.object({
    userId: z.string({ required_error: 'User Reference must be provided' }),
    bikeId: z.string({ required_error: 'Bike Reference must be provided' }),
    startTime: z.date(),
    returnTime: z.date().nullable().default(null),
    totalCost: z.number().default(0),
    isReturned: z.boolean().default(false),
  }),
})

export const BookingValidation = {
  bookingValidationSchema,
}
