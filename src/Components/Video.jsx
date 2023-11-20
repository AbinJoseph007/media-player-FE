import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addhistory, deleteAllVideo } from '../services/allapi';



function Video({ displayVideo, setDeleteVideo  ,ispresent}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);

        const { caption, emplink } = displayVideo
        let time = new Date()
        console.log(time);
        let timestamp = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time)
        console.log(timestamp);
        let videoDetails = {
            caption, emplink, timestamp
        }
        await addhistory(videoDetails)
    }

    const removeVideo = async (id) => {
        const response = await deleteAllVideo(id)
        setDeleteVideo(true)

    }

    // function to drag video card
    const cardDrag= (e,id)=>{
        console.log(`the id of the video card  dragged is${id}`);
        e.dataTransfer.setData("videoId",id)

    }

    return (
        <>
            <Card style={{ width: '100%', }} className='mb-3' draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
                <Card.Img height={'280px'} onClick={handleShow} variant="top" src={displayVideo.url} />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center'>
                        <h6>{displayVideo.caption}</h6>
{    !ispresent &&                    <button onClick={() => removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
}                    </Card.Title>
                </Card.Body>
            </Card>
        
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="530" src={`${displayVideo.emplink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Video