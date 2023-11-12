// Import necessary dependencies
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/townhall.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Welcome() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="h1">Find problems to find solutions.</div>
      <div className="h2">Please sign in or sign up.</div>
    </div>
  );
}