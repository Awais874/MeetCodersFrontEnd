import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/Constant';
// const Login = () => {

//     const[emailId, setEmailid] = useState("awaisAbdullah750@gmail.com");
//     const[errormessage,setErrorMessage]=useState();
//     const[password,setpassword] = useState("Password@123");
// const dispatch=useDispatch();
// const navigate = useNavigate();
// const handleLogin = async() => {

// try{

//   console.log({ emailId, password })
//   const res = await axios.post(
//     BASE_URL+"login", 
//     {emailId,password},
//     {withCredentials: true}
//   )
// dispatch(addUser(res.data.user || res.data));

// return navigate("/");
// }

// catch(err)
// { 

// setErrorMessage (err?.response?.data);
// }

// }

//   return (
//   <div className="flex justify-center my-10">
//   <div className="w-96 rounded-xl bg-gray-900 shadow-lg border border-gray-800">
//     <div className="p-6">
//       <h2 className=" text-xl font-semibold text-white mb-6">
//         Login
//       </h2>
//       <div>
// <label className="form-control w-full max-w-xs">
    
// <div className="label">
// <span className="label-text text-white">Email ID</span>
// </div>
// <input type="text"
// value={emailId}
// onChange={(e)=> setEmailid(e.target.value) }
// className="input input-bordered w-full max-w-xs"

// />
// </label>

// <label className="form-control w-full max-w-xs">
    
// <div className="label">
// <span className="label-text text-white">Password</span>
// </div>
// <input type="text"
// value={password}
// onChange={(e) => setpassword(e.target.value) }
// className="input input-bordered w-full max-w-xs"

// />
// <a className='text-white'>{errormessage}</a>
// </label>
// </div>

//       </div>

//       <div className="flex justify-center">
//         <button onClick={handleLogin} className="px-6 py-2 my-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition">
//           Login
//         </button>
//       </div>
//     </div>
//   </div>


//   )
// }

// export default Login














// import { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
    
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch(err) {
      console.log(err);
      setError(err?.response?.data|| "Something went wrong");
     
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID:</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>

          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;