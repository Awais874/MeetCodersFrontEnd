import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../utils/Constant'
import { addfeed } from '../utils/feedSlice'
import Usercard from './Usercard'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
  
const Feeds = () => {
const dispatch =useDispatch();
  const feed = useSelector((store)=>store.feed);
console.log("feed data from store",feed);
  const getfeed = async ()=> {
if (feed) return
try{
const res = await axios.get(BASE_URL+"feed",{withCredentials:true,});

dispatch(addfeed(res.data));

}
catch(err)
{
console.log("feed error ",err);

}

  }

useEffect(()=>{

getfeed();
},[])



  return feed &&(
    <div>
   
     <Usercard user = {feed?.data?.[0]} />
    </div>
  )
}

export default Feeds
