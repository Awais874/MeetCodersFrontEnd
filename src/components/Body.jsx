import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/Constant'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
const Body = () => {

const navigate = useNavigate();

const dispatch=useDispatch();


const fetchUser = async() => {
 try{ if (userData) return;

const res = await axios.post(BASE_URL+"/profile/view",{withCredentials:true})

dispatch(addUser(res.data))


}

catch(err) {

  if (err.status ==401)
{navigate("/login")}

}

}




useEffect(()=>{

fetchUser();

},[])


  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )

}
export default Body

