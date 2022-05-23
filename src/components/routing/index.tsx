import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/products/Detail'
import Home from '../pages/home'
import NavBar from '../layout/NavBar'

export default function AppRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Detail />} />
        {/* <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route> */}
      </Routes>
    </>
  )
}
