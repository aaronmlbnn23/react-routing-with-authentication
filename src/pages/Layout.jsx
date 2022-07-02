import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Navbar from '../components/navbar'
import ProtectedRoutes from '../ProtectedRoutes'
import Profile from './Profile'
const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}

export default Layout