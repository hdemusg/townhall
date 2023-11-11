import Navbar from '../shared/components/Navbar'
import Auth from '../shared/components/Auth'
import { ActionFunction, json } from '@remix-run/node'
import { validateEmail, validatePassword } from '~/utils/validators.server'
import { login, register } from '~/utils/auth.server'

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData()
    const email = form.get('username')
    const password = form.get('password')
  
    if (typeof email !== 'string' || typeof password !== 'string') {
      return json({ error: `Invalid Form Data` }, { status: 400 })
    }
  
    const errors = {
      email: validateEmail(email),
      password: validatePassword(password),
    }
  
    if (Object.values(errors).some(Boolean))
      return json({ errors, fields: { email, password }}, { status: 400 })

    return null;
  }

export default function AuthRoute() {
  return (<>
    <Navbar />
    <Auth />
  </>
  );
}