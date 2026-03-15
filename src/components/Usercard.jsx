import React from 'react'
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/Constant';
import axios from 'axios';
import { removeUserFromFeed } from '../utils/feedSlice';

const Usercard = ({user}) => {

if (!user) {
    return <div>Loading user...</div>;
  }

const {_id, firstName, lastName,photoUrl,age,gender,about} =user;

const dispatch=useDispatch();

const handleSendRequest = async(status, userId) =>{


try{
const res = await axios.post(BASE_URL+"request/send/" + status +"/"+ userId, {},{withCredentials:true});
dispatch(removeUserFromFeed(userId));
}
catch(err){

console.log("Backend message:", err.response?.data?.message || err.response?.data);

}

}





 


  
  
  
  
  
  
  
  
  return  (<div className="flex justify-center my-8">
      
<div className="card bg-base-200 w-96 shadow-sm ">
  <figure>
    <img
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
   {age && gender && <p>{age + ", "+ gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-end m-9">
      <button onClick={()=>handleSendRequest("ignored",_id)} className="btn btn-primary">Ignore</button>
      <button onClick={()=>handleSendRequest("interested",_id)} className="btn btn-secondary">Interested</button>
     
    </div>
  </div>
</div>



    </div>
  )
}

export default Usercard
