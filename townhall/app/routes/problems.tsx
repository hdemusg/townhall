import Navbar from '../shared/components/Navbar'
import Home from '../shared/components/Home'
import { Outlet } from '@remix-run/react';

import {json, 
  LoaderFunction
} from '@remix-run/node'

import { useLoaderData } from "@remix-run/react";
import { getProblems } from '../utils/problem.server'

export const loader: LoaderFunction = async () => {
  const probs = await getProblems()
  return json(probs)
}

export default function ProblemsRoute() {

  const problems = useLoaderData()
  
  return (
    <div className="jokes-layout">
      <Navbar />
      <Outlet />
      <Home problems={problems}/>
    </div>
  );
}
