import { Link } from "@remix-run/react";

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Problems!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">View Problems</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
