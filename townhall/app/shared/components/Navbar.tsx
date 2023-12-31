// Import necessary dependencies
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/townhall.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Navbar() {
  return (
    <div className="header">
      <Link className="name" to="/">
        TOWNHALL
      </Link>
      <div className="center-links">
        <Link className="nav-link" to="/problems">
          Problems
        </Link>
        <Link className="nav-link" to="/problems/report">
          Add Proposal
        </Link>
      </div>
      <Link className="auth" to="/auth">
        Log In
      </Link>
    </div>
  );
}
