import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import Category from '../Components/Category'

import Visible from '../Components/Visible'




function Home() {
  const [videoStatus , setVideoStatus]=useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-vedios">
        <Add setVideoStatus={setVideoStatus}/>
      </div>
      <Link to={'/watchhistory'} style={{textDecoration:'none', color:'white', fontSize:'30px'}}>Watch History</Link>
    </div>
    
    
    <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between ">
      <div className="all-vedios col-lg-9">
        <h4 className='mb-5'>All Videos</h4>
       <Visible videoStatus={videoStatus}/>
      </div>
      <div className="category col-lg-3">
        <Category/>
      </div>
    </div>
  </>
  )
}

export default Home