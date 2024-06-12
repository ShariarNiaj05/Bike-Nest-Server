import { z } from 'zod'

const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email Format' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
})

const accessTokenValidationSchema = z.object({
  cookies: z.object({
    accessToken: z.string({
      required_error: 'Access Token Is Required',
    }),
  }),
})

export const AuthValidation = {
  loginValidationSchema,
  accessTokenValidationSchema,
}
