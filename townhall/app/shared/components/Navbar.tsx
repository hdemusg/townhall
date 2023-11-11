import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";


import stylesUrl from "~/styles/townhall.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl},
];

export default function Navbar() {
    return (
        <div className="header">
            <Link className="name" to="/">TOWNHALL</Link>
            <Link className="auth" to="auth"> Log In</Link>
        </div>
    )
}
