import React, { useEffect } from 'react'
import { Appbar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate=useNavigate();
  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(!token){
      navigate("/signin");
    }
  },[]);

  return (
    <div>
      <Appbar/>
      <div className='p-4'>
        <Balance value={"10000"}/>
        <Users/>
      </div>
    </div>
  )
}

export default Dashboard