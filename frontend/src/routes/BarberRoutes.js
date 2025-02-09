import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import BarberRegisterPage from '../pages/barber/barberRegisterPage/BarberRegisterPage';
import BarberDashboardPage from '../pages/barber/barberDashboard/BarberDashboardPage';
import BarberProfilePage from '../pages/barber/barberProfilePage/BarberProfilePage';
import BarberProfileEditPage from '../pages/barber/barberProfilePage/BarberProfileEditPage';
import HairStylesPage from '../pages/barber/hairStyelsPage/HairStylesPage';


const BarberRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/barber/register" element={<BarberRegisterPage />} />
            <Route path="/barber/dashboard" element={<BarberDashboardPage />} />
            <Route path="/barber/profile" element={<BarberProfilePage />} />
            <Route path="/barber/profile/edit/:id" element={<BarberProfileEditPage />} />
            <Route path="/barber/hairStyles" element={<HairStylesPage />} />
        </Routes>
    </BrowserRouter>
)

export default BarberRoutes