import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navugateByUrl = useNavigate()
  
  return (
    <>
      <Row className=''>
        <Col></Col>
        <Col lg={5} className='mt-5'>
          <h2>Welcome to <span className='text-warning'>Media Player</span></h2>
          <p style={{ textAlign: 'justify' }} className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis provident, neque, itaque eaque sit similique veniam amet quos voluptas culpa quas velit iure autem nam expedita assumenda in facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque deleniti illo consequuntur minus provident possimus hic suscipit facere. Asperiores similique itaque voluptates! Maiores in sint placeat culpa at cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga magni fugiat quam minus in aliquid labore facilis iste, commodi optio quidem veniam modi eos itaque ducimus? Ut, itaque officia.</p>
          <button onClick={()=>navugateByUrl('/home')} className='btn btn-danger mt-5'> get submitted</button>

        </Col>
        <Col ></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />

        </Col>


      </Row>

      <div className='container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column'>
        <h3 className='mb-5'>features</h3>
        <div className='cards d-flex justify-content-center align-items-evenly ms-2 me'>
          <Card className='p-4' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>

          <Card className='p-4 ms-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-4 ms-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>

      </div>

      <div className='container border border-2 rounded border-secondary p-5 mt-5 mb-5'>
        <Row>
          <Col lg={5}>
            <h3 className='text-warning'>Simple Fast and Furious</h3>
            <p style={{ textAlign: 'justify' }}><span className='fs-5 fw-warning'>play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste autem ratione, earum voluptatibus sed sint ducimus assumenda quas molestiae nostrum cum dicta, veritatis amet, vitae reprehenderit architecto nihil ipsa.</p>
            <p style={{ textAlign: 'justify' }}><span className='fs-5 fw-warning'>play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste autem ratione, earum voluptatibus sed sint ducimus assumenda quas molestiae nostrum cum dicta, veritatis amet, vitae reprehenderit architecto nihil ipsa.</p>
            <p style={{ textAlign: 'justify' }}><span className='fs-5 fw-warning'>play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste autem ratione, earum voluptatibus sed sint ducimus assumenda quas molestiae nostrum cum dicta, veritatis amet, vitae reprehenderit architecto nihil ipsa.</p>
          </Col>
          <Col></Col>

          <Col lg={6}>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/szvt1vD0Uug" title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>

      </div>

    </>
  )
}

export default Landingpage