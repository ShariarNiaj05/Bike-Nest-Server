import jwt, { JwtPayload } from 'jsonwebtoken'
import { TLoginUser } from './auth.interface'

export const createToken = (
  jwtPayload: { email: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  })
}
