import React, { useContext } from 'react'
import axios from 'axios';

import AuthContext from '../contexts/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';


const logout = () => {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem('user')
  const data = JSON.parse(auth);
  console.log(data.token)
  const headers = {
    'content-type': 'application/json',
    Authorization: `Bearer ${data.token}`,
  }
  const getData = async () => {
    //console.log(headers)
    const res = await axios.get('http://127.0.0.1:8000/api/accounts', {
      headers: headers
    })
    console.log(res)
  }

  const Logout = () => {
    try {
    axios.get('http://127.0.0.1:8000/api/logout', {
      headers: headers
    }) .then((response) => {
    console.log(response)
    sessionStorage.removeItem('user')
    navigate('/login')

    }).catch((error) => {
        console.log(error)
    })
  } catch (err){
    console.log(`error: ${err}`)
  }
  
  }
  return (
    <div><button onClick={Logout}>Logout</button>
      <button onClick={getData}>Get Data</button>
    </div>

  )
}

export default logout