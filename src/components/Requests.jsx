import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, removeRequest } from '../utils/requestsSlice';
import { BASE_URL } from '../utils/Constant';

const Requests = () => {

const dispatch =useDispatch();
const requests = useSelector((store)=>store.requests)

const reviewRequest =async(status,_id) => {

   console.log("status:", status);
    console.log("requestId:", _id);
try{

const res = await axios.post(BASE_URL + "request/review/"+ status + "/"+_id , {}, {withCredentials:true})

dispatch(removeRequest(_id));
}


catch(err){
 console.log("Error message:", err.message);
  console.log("Status code:", err?.response?.status);
  console.log("Error data:", err?.response?.data);

}


}

const fetchRequests =async() =>{

try {
const res = await axios.get(BASE_URL+"user/requests/received", {withCredentials:true});

console.log("requestsData",res?.data?.data);
dispatch(addRequest(res?.data?.data))
}

catch(err){

    console.log(err.message);
}

}

useEffect(()=>{

fetchRequests();



},[])

  if(!requests) return;
        if(requests.length===0) return<h1>No Requests found</h1>



  return (
    <div className='text-center my-10'>
      <h1 className='text-bold text-3xl'>Requests</h1>
    
    {requests.map((requests)=>{
const { _id, fromUserId } = requests;
const { firstName, lastName, photoUrl, age, gender, about } = fromUserId || {};

// const {_id,firstName,lastName,photoUrl,age,gender,about } =requests;
return (
<div key={_id} className='flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto'>
<div>

<img alt="photo" className='w-20 h-20 rounded-full' src={photoUrl} />
</div>


<div className='text-left mx-4'>
    <h2 className='front-bold text-xl'>
        {firstName+" " +lastName}
{console.log("Ye hai first name aur last name",firstName,lastName )}
        </h2> 
{age && gender && <p>{age + " " + gender}</p>}
<button onClick={()=>reviewRequest("accepted",requests._id)} className="btn btn-primary">Accept</button>
      <button onClick={()=>reviewRequest("rejected",requests._id)} className="btn btn-secondary">Reject</button>
</div>
</div>
)
    }
    
    
    
    )}
    

    


    
    </div>
  )



}

export default Requests
