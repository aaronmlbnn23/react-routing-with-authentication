import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthProvider'
import Logout from '../components/logout'
const navbar = () => {
  const { auth} = useContext(AuthContext)
  return (
    
    <div>Navbar <Logout/></div>
  )
}

export default navbar