import { Link } from "@remix-run/react";
import { Outlet } from '@remix-run/react';

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}