import Navbar from '../shared/components/Navbar'
import Welcome from '../shared/components/Welcome'
import { Outlet } from '@remix-run/react';

export default function IndexRoute() {
  return (<>
    <Navbar />
    <Outlet />
    <Welcome />
  </>
  );
}