import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/townhall.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl},
];

export default function Auth() {
    return (
        <div className="content">
          <div className="authform">
            Auth
          </div>
        </div>
        
    )
}