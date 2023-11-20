import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadvideo } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Data , setData] = useState({
    id:"",
    caption:"",
    url:"",
    emplink:""
  })
  console.log(Data);

  const embeded= (e)=>{
    const{value} =e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setData({...Data,emplink:link})
  }
  console.log(Data);

  const handleuplaod =async ()=>{
    const {id,caption,url,emplink}=Data
    if (!id || !caption ||!url ||!emplink){
      toast.warning("please fill the form completely")
    }
    else{
      const response = await uploadvideo(Data)
      console.log(response);
      if(response.status>=200 && response.status<300){
        setVideoStatus(response.data)
        toast.success('upload successfull')


        // to close the tab 
        handleClose()
      }
      else{
        console.log(response);
        toast.error('something went wrong')
      }
    }

  }


  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fa-beat fs-5"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-danger"></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-danger p-3 rounded '>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
             
              <Form.Control onChange={(e)=>setData({...Data,id:e.target.value})} type="text" placeholder="Enter video id" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
             
              <Form.Control onChange={(e)=>setData({...Data,caption:e.target.value})} type="text" placeholder="Enter video caption" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              
              <Form.Control onChange={(e)=>setData({...Data,url:e.target.value})} type="text" placeholder="enter video image URL" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
             
              <Form.Control onChange={embeded} type="text" placeholder="enter youtube video link" />
            </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleuplaod} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>

  )
}

export default Add

// https://www.youtube.com/watch?v=3iR9CRGgMoU

// https://www.youtube.com/embed/3iR9CRGgMoU-