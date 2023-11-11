import type { LinksFunction } from "@remix-run/node";
import { useState } from 'react'
import { FormField } from './FormField'

import stylesUrl from "~/styles/townhall.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl},
];

export default function Auth() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({ ...form, [field]: event.target.value }))
      }

    return (
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
        
    )
}