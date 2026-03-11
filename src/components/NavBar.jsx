import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/Constant'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice';
import axios from 'axios';
const NavBar = () => {
const user = useSelector((store) => store.user);
 
const dispatch = useDispatch();
const navigate = useNavigate();
const handleLogout = async() =>{
  
try{


const res = await axios.post(BASE_URL+"logout",{},{withCredentials:true})


dispatch(removeUser());
  
return navigate("/login");

}
catch(err){
console.log(err);

}
}


  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
     <Link to ="/Profile" className = "btn btn-ghost text-xl"> MeetCoders</Link>
  </div>
  <div className="flex-none gap-2">
    {console.log("user ye hai", user)}
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    { user && ( <div className="dropdown dropdown-end mx-5">Welcome, {user.firstName}
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       <div className="w-10 rounded-full" >
          <img
            alt="User photo"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to ="/Profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link to ="/connections">
          Connections
          </Link>
          </li>
          <li>
          <Link to ="/requests">
          requests
          </Link>
          </li>
        <li>
          <a onClick={handleLogout}>Logout</a>
          
          </li>
      </ul>
    </div>)}
  </div>
</div>
    </div>
  )
}

export default NavBar




