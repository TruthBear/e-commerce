import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Root() {
  return (
    <>
      <Nav />
      <main id='detail' className='py-10 flex justify-center'>
        <Outlet />
      </main>
    </>
  )
}
