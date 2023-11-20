import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deletecategery, getAllCategeries, getVideos, updateCategery } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Col, Row } from 'react-bootstrap';
import Video from './Video';


function Category() {
  const [categeryName, setCategeryName] = useState("")
  const [categery, setCtaegery] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function to add categery 
  const addCategary = async () => {
    console.log(categeryName);

    if (categeryName) {

      let body = {
        categeryName,
        allvideos: []
      }
      const response = await addCategory(body)
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        toast.success('catergery added successfully')
        // state value is made null
        setCategeryName("")
        // close the modal
        handleClose()
        // to get the categery
        allcategery()
      }
      else {
        toast.error('something went wrong , please try later')
      }

    }
    else {
      toast.warning('please enter the categery name')
    }
  }

  // function to get all categeries 
  const allcategery = async () => {
    const { data } = await getAllCategeries()
    // console.log(data);
    setCtaegery(data)
  }
  console.log(categery);

  // function to delete categery 
  const deleteACategery= async(id)=>{
    await deletecategery(id)
    //to get the remaining categeries 
    allcategery()
  }
  // function to prevent reload so that the data that we send wont loss
  const dragOver =(e)=>{
    e.preventDefault()
  }
  const videoDrop =async (e , categeryId)=>{
     console.log(`drop on the categery id ${categeryId}`);
    //  to get the data send from videocard
    let videoid = e.dataTransfer.getData("videoId")
    console.log(videoid);


    const {data}= await getVideos(videoid)
    console.log(data);

    const selectedCategery = categery.find(item=>item.id===categeryId)
    selectedCategery.allvideos.push(data)
    console.log(selectedCategery);

    await updateCategery(categeryId,selectedCategery)
    allcategery()


  }

  useEffect(() => {
    allcategery()
  }, [])
  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>


      </div>
      {categery?.length > 0 ?
        categery.map((item) => (
          <div className='m-5 border border-secondary p-3 rounded'>
            <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
              <h6>{item.categeryName}</h6>
              <button onClick={()=>deleteACategery(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
            </div>

            <Row>
              <Col>
             { item?.allvideos?.length>0?
             item?.allvideos?.map((card)=>(<Video displayVideo={card} ispresent={true}/>))

              :
              <p>nothing to display</p>}
              </Col>
            </Row>


          </div>
        ))
        :
        <p className='m-3 fw-bolder fs-5 text-danger'>no categery</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil me-2 text-danger"></i>Add NEw Catogery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-danger p-3 rounded '>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>categery name</Form.Label>
              <Form.Control type="text" placeholder="categery ID" onChange={(e) => setCategeryName(e.target.value)} />
            </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategary} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>

  )
}

export default Category