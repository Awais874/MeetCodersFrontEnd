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

dispatch(addfeed(res.data.data));
console.log("res feed data is ",res);
}
catch(err)
{
console.log("feed error ",err);

}

  }

useEffect(()=>{

getfeed();
},[])

if(!feed)
return;

if(feed.length <=0) return <h1>No new users !/feeds</h1>
  return feed &&(
    <div>
   
     <Usercard user = {feed?.[0]} />
    </div>
  )
}

export default Feeds
