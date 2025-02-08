import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashboardPage from '../pages/admin/adminDashboard/AdminDashboardPage';
import BarberManagerPage from '../pages/admin/barberManagerPage/BarberManagerPage';
import AdminRegister from '../components/admin/adminRegister/AdminRegister';
import MyProfilePage from '../pages/admin/myProfilePage/MyProfilePage';
import AdminRegisterPage from '../pages/admin/adminRegisterPage/AdminRegisterPage';



const AdminRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/admin/register" element={<AdminRegisterPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route path="/admin/barberManager" element={<BarberManagerPage />} />
            <Route path="/admin/profile" element={<MyProfilePage />} />
        </Routes>
    </BrowserRouter>
)

export default AdminRoutes;