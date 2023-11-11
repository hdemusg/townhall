import type { AuthForm } from './types.server'
import { prisma } from './prisma.server'
import { createUser } from './user.server'
import { redirect, json, createCookieSessionStorage } from '@remix-run/node'
import bcrypt from 'bcryptjs'

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'kudos-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
    const session = await storage.getSession()
    session.set('userId', userId)
    return redirect(redirectTo, {
      headers: {
        'Set-Cookie': await storage.commitSession(session),
      },
    })
  }

export async function register(user: AuthForm) {
  const newUser = await createUser(user)
  if (!newUser) {
    console.log('failure')
    return json(
      {
        error: `Something went wrong trying to create a new user.`,
        fields: { email: user.username, password: user.password },
      },
      { status: 400 },
    )
  }
  console.log('success')
  return createUserSession(newUser.id, '/');
}

export async function login(u: string, p: string) {
    const user = await prisma.user.findUnique({
        where: { email: u },
      })
      if (!user) {
        var newUser = {username: u, password: p};
        return register(newUser);
      }
    
      else if (!(await bcrypt.compare(user.password, p)))
        return json({ error: `Incorrect login` }, { status: 400 })
      else {

        return createUserSession(user.id, '/');
      }
}