import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthProvider'
import Logout from '../components/logout'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
const Dashboard = () => {
  const auth = sessionStorage.getItem('user')
 
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard