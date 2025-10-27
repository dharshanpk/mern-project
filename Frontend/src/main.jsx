
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'

import ViewProduct from './pages/viewproduct.jsx'
import Createproduct from './pages/createproduct.jsx'
import Navbar from './pages/navbar.jsx'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar/>
      
     <Outlet/>
      
    </>
  )
}



const router=createBrowserRouter([
  {
  element: <Layout />,
  children: [
    {
      path:'/',
      element:<ViewProduct/>
    },
    {
      path:'/add',
      element:<Createproduct/>
    },
  ],},
]
)

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
     
     <RouterProvider router={router}/>
    
  </React.StrictMode>
)

