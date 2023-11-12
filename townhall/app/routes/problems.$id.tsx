import Navbar from '../shared/components/Navbar'
import { getProblemById } from '../utils/problem.server'

import { Portal } from '../shared/components/Portal'
import { Modal } from '../shared/components/Modal';

import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

// 1
export const loader: LoaderFunction = async ({ request, params }) => {
  // 2
  const { userId } = params
  return json({ userId })
}

export default function ProblemRoute() {
    const data = useLoaderData()
    return (
        <Portal wrapperId="kudo-modal">
            <Modal isOpen={true}>
            {<h2> User: {data.userId} </h2>}
                </Modal>
        </Portal>
        
    )
}