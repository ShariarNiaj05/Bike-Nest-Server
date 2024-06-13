import { z } from 'zod'

const bikeValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),

    description: z.string({
      invalid_type_error: 'Description must be a string',
    }),

    pricePerHour: z
      .number({
        invalid_type_error: 'Price per hour must be a number',
      })
      .nonnegative({ message: 'Price per hour must be a non-negative number' }),

    isAvailable: z.boolean().default(true),

    cc: z
      .number({
        invalid_type_error: 'Engine capacity (cc) must be a number',
      })
      .positive({ message: 'Engine capacity (cc) must be a positive number' }),

    year: z
      .number({
        invalid_type_error: 'Year must be a number',
      })
      .int({ message: 'Year must be an integer' })
      .nonnegative({ message: 'Year must be a non-negative integer' }),

    model: z.string({
      invalid_type_error: 'Model must be a string',
    }),

    brand: z.string({
      invalid_type_error: 'Brand must be a string',
    }),
  }),
})

const updateBikeValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be a string',
      })
      .optional(),

    description: z
      .string({
        invalid_type_error: 'Description must be a string',
      })
      .optional(),

    pricePerHour: z
      .number({
        invalid_type_error: 'Price per hour must be a number',
      })
      .nonnegative({ message: 'Price per hour must be a non-negative number' })
      .optional(),

    isAvailable: z.boolean().optional(),

    cc: z
      .number({
        invalid_type_error: 'Engine capacity (cc) must be a number',
      })
      .positive({ message: 'Engine capacity (cc) must be a positive number' })
      .optional(),

    year: z
      .number({
        invalid_type_error: 'Year must be a number',
      })
      .int({ message: 'Year must be an integer' })
      .nonnegative({ message: 'Year must be a non-negative integer' })
      .optional(),

    model: z
      .string({
        invalid_type_error: 'Model must be a string',
      })
      .optional(),

    brand: z
      .string({
        invalid_type_error: 'Brand must be a string',
      })
      .optional(),
  }),
})

export const BikeValidation = {
  bikeValidationSchema,
  updateBikeValidationSchema,
}
