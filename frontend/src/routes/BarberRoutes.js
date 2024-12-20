import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import BarberLoginPage from '../pages/barber/barberLoginPage/BarberLoginPage';
import BarberRegisterPage from '../pages/barber/barberRegisterPage/BarberRegisterPage';


const BarberRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/barber/register" element={<BarberRegisterPage />} />
            <Route path="/barber/login" element={<BarberLoginPage />} />
        </Routes>
    </BrowserRouter>
)


export default BarberRoutes