import { z } from 'zod'

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),
    email: z
      .string({
        invalid_type_error: 'Email must be a string',
      })
      .email({ message: 'Invalid email address' }),

    password: z.string({
      invalid_type_error: 'Password must be a string',
    }),

    phone: z.string({
      invalid_type_error: 'Phone must be a string',
    }),

    address: z.string({
      invalid_type_error: 'Address must be a string',
    }),

    role: z.enum(['admin', 'user'], {
      invalid_type_error: 'Role must be either "admin" or "user"',
    }),
  }),
})

export const UserValidation = {
  userValidationSchema,
}
