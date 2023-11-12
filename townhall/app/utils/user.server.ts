import bcrypt from 'bcryptjs'
import type { AuthForm } from './types.server'
import { prisma } from './prisma.server'

export const createUser = async (user: AuthForm) => {
  console.log('creating user')
  const passwordHash = await bcrypt.hash(user.password, 10)
  const newUser = await prisma.user.create({
    data: {
      email: user.username,
      password: passwordHash,
      dob: "not specified",
      ethnicity: "not specified",
      gender: "not specified"
    },
  })
  return { id: newUser.id, email: user.username }
}