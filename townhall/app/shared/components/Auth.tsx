import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/townhall.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl},
];

export default function Auth() {
    return (
        <div className="content">
          <div className="authform">
            TOWNHALL
            <form method="post">
                <div className="form-field">
                <label htmlFor="username">Username</label>
                <input type="text" id="username"></input>
                </div>
                <div className="form-field">
                <label htmlFor="username">Password</label>
                <input type="text" id="password">
                </input>
                </div>
                <button>
                    Log In
                </button>
            </form>
          </div>
        </div>
        
    )
}