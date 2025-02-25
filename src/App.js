import { Container } from 'react-bootstrap'
import React from 'react'
import toast, { Toaster } from "react-hot-toast";
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Toaster />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}
export default App;



