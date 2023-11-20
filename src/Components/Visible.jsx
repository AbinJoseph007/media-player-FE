import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Video from './Video'
import { getAllVideo } from '../services/allapi'


function Visible({videoStatus}) {

  const [allVideo, setAllVideo]= useState([])

  const [deleteVideo , setDeleteVideo] = useState(false)

  const getALLuploadedVideo = async()=>{
   const response = await getAllVideo()
  //  console.log(response);
  const {data} = response
  // console.log(data);
  setAllVideo(data)
  }
  console.log(allVideo);


  useEffect(()=>{
    getALLuploadedVideo()
    setDeleteVideo(false)
  },[videoStatus ,deleteVideo])


  return (
    <>
      <Row>
        { allVideo.length>0?
        allVideo.map((video)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <Video displayVideo={video} setDeleteVideo={setDeleteVideo}  />
        </Col>
        ))
          :
        <p>nothing to display</p>
        }
        
      </Row>
    </>
  )
}

export default Visible