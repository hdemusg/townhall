import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/townhall.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl},
];

export default function Navbar() {
    return (
        <div className="header">
            <div className="name">
            TOWNHALL
            </div>
            <div className="auth">
                Log In
            </div>
        </div>
    )
}
