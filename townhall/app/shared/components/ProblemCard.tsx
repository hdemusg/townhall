// Import necessary dependencies
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Problem } from '@prisma/client'

import stylesUrl from "~/styles/townhall.css";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ProblemCard(id: string) {
  return (
    <div className="header">
      <Link className="name" to="/">
        {id}
      </Link>
      <div className="center-links">
        <Link className="nav-link" to="/problems">
        </Link>
        <Link className="nav-link" to="/problems/report">
        </Link>
      </div>
      <Link className="auth" to="/auth">
      </Link>
    </div>
  );
}