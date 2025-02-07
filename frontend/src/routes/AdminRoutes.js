import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashboardPage from '../pages/admin/adminDashboard/AdminDashboardPage';



const AdminRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        </Routes>
    </BrowserRouter>
)

export default AdminRoutes;