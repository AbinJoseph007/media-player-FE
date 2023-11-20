// upload video 

import { CommonAPI } from "./CommonAPI.js"
import { serverURL } from "./ServerURL.js"

// upload video
export const uploadvideo = async(request)=>{
    // return the value to Add.jsx component
    return await CommonAPI('POST',`${serverURL}/video`,request)
}

//get all videos from json server
export const getAllVideo = async ()=>{
    //make get request to http://localhost:4000/videos to get videos to json server return response to view component
    return await CommonAPI('GET',`${serverURL}/video`,"")
}

// to delete a video 
export const deleteAllVideo = async(id)=>{
   return await CommonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

// add history
export const addhistory = async(videoDetails)=>{
    return await CommonAPI('POST',`${serverURL}/history`,videoDetails)
}

export const getAllHistory= async()=>{
  return await CommonAPI('GET',`${serverURL}/history`,"")
}

// api call to delete history
export const deleteVideoHistory= async(id)=>{
    return await CommonAPI('DELETE',`${serverURL}/history/${id}`,{})
  }

export const addCategory = async(body)=>{
   return await CommonAPI('POST',`${serverURL}/category`,body)
}

// to get all categeries from json server
export const getAllCategeries= async()=>{
  return await CommonAPI('GET',`${serverURL}/category`,"")
}


// api to delete categeries
export const deletecategery= async(id)=>{
  return await CommonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//  api call to get a particular video from localhist
export const getVideos= async(id)=>{
  return await CommonAPI('GET',`${serverURL}/video/${id}`,"")
}

// api to update the categery with new videos
export const updateCategery = async(id,body)=>{
  return await CommonAPI('PUT',`${serverURL}/category/${id}`,body)
}