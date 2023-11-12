import Navbar from '../shared/components/Navbar'
import { useState } from 'react'
import { ActionFunction, json } from '@remix-run/node'
import { validateEmail, validatePassword } from '~/utils/validators.server'
import { login, register } from '~/utils/auth.server'
import { FormField } from '../shared/components/FormField';

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

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({ ...form, [field]: event.target.value }))
      }
  return (
    <>
    <Navbar />
    <div className="content">
          <div className="authform">
            TOWNHALL
            <form method="post">
                <div className="form-field">
                <FormField htmlFor="username" type="username" label="Username" value={formData.username}
                onChange={e => handleInputChange(e, 'username')}></FormField>
                </div>
                <div className="form-field">
                <FormField htmlFor="password" type="password" label="Password" value={formData.password}
                onChange={e => handleInputChange(e, 'password')}></FormField>
                </div>
                <button type="submit">
                    Log In
                </button>
            </form>
          </div>
        </div>
  </>
  )
}
  