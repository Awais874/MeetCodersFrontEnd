import React, { useState } from 'react'
import Usercard from './Usercard';
import { BASE_URL } from '../utils/Constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';

const EditProfile = (user) => {

console.log("editprofile",user);
const[firstName, setFirstName] = useState(user.user.firstName);  
const[lastName, setLastName] = useState(user.user.lastName);
const[gender, setGender] = useState(user.user.gender||"");
const[age, setAge] = useState(user.user.age||"");
const[about, setAbout] = useState(user.user.about || "");
const [error,setError]= useState("");
const[photoUrl, setPhotoUrl] = useState(user.user.photoUrl);
const[showtoast,setShowToast]=useState(false);
console.log(firstName,lastName,about);
const dispatch = useDispatch();
const saveProfile = async() => {

try {
const res = await axios.patch(BASE_URL+"profile/edit",{ firstName,lastName,photoUrl,age,gender,about },{withCredentials:true});
console.log("updatedDetails",res);
dispatch(addUser(res?.data?.data));

setShowToast(true);
 setTimeout(() => {setShowToast(false);

},3000);

}
catch(err){
console.log("PROFILE UPDATE ERROR", err);
  console.log("ERROR RESPONSE", err?.response?.data);
//   setError(err?.response?.data || err.message);

}


}


  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center my-10">
  <div className="w-96 rounded-xl bg-gray-900 shadow-lg border border-gray-800">
    <div className="p-6">
      <h2 className=" text-xl font-semibold text-white mb-6">
        Edit Profile
      </h2>
      <div>
<label className="form-control w-full max-w-xs">
    
<div className="label">
<span className="label-text text-white">first Name</span>
</div>
<input type="text"
value={firstName}
onChange={(e)=> setFirstName(e.target.value) }
className="input input-bordered w-full max-w-xs"

/>
</label>








<label className="form-control w-full max-w-xs">
    
<div className="label">
<span className="label-text text-white">Last Name</span>
</div>
<input type="text"
value={lastName}
onChange={(e)=> setLastName(e.target.value) }
className="input input-bordered w-full max-w-xs"

/>
</label>

<label className="form-control w-full max-w-xs">
    
<div className="label">
<span className="label-text text-white">Photo Url</span>
</div>
<input type="text"
value={photoUrl}
onChange={(e)=> setPhotoUrl(e.target.value) }
className="input input-bordered w-full max-w-xs"

/>
</label>

<label className="form-control w-full max-w-xs">
    
<div className="label">
<span className="label-text text-white">Gender</span>
</div>
<input type="text"
value={gender}
onChange={(e)=> setGender(e.target.value) }
className="input input-bordered w-full max-w-xs"

/>
</label>


<label className="form-control w-full max-w-xs">
    
<div className="label">
<span className="label-text text-white">Age</span>
</div>
<input type="text"
value={age}
onChange={(e)=> setAge(e.target.value) }
className="input input-bordered w-full max-w-xs"

/>
</label>


<label className="form-control w-full max-w-xs">
    
<div className="label">
<span className="label-text text-white">About</span>
</div>
<input type="text"
value={about}
onChange={(e)=> setAbout(e.target.value) }
className="input input-bordered w-full max-w-xs"

/>
</label>




</div>

      </div>

      <div className="flex justify-center">
        <button onClick={saveProfile} className="px-6 py-2 my-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition">
          Submit
        </button>
      </div>
    </div>
  </div>
  <Usercard user={{firstName,lastName,photoUrl,age,gender,about}}/>

{showtoast && (
<div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
)
}


  </div>
  )
}

export default EditProfile
