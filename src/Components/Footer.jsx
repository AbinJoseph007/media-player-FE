import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div style={{ width: "100%", height: "300px" }} className='d-flex justify-content-center align-items-center flex-column w-100' >
      <div className="footer d-flex justify-content-evenly align-items-center w-100 ">
        <div className="website" style={{ width: "400px" }}>
          <h4>
            <i class="fa-solid fa-video "></i>{' '}
            Video Player
          </h4>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam autem tenetur dolorum voluptas ipsam doloribus a exercitationem maxime, id dicta suscipit veniam perferendis est, eius ab, minima sint amet?</p>
          <p> </p>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-4'>links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>landing page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/watchhistory'} style={{ textDecoration: 'none', color: 'white' }}>watchhistory</Link>



        </div>
        <div className="guides d-flex flex-column">
          <h3>guides</h3>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>react</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }}>react bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>bootwatch</Link>


        </div>
        <div className="contacts">
          <h3 className='mb-3 '>contacts</h3>
          <div className='d-flex mb-4'>
            <input type="text" className='form-control' placeholder='enter your email ID' />
            <button className='btn btn-danger text-white ms-2 ' >subscribe</button>
          </div>
          <div className='icons d-flex justify-content-evenly'>
            <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-brands fa-linkedin fa-2x"></i>
            </Link>
            <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-brands fa-bootstrap fa-2x"></i>
            </Link>
            <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-brands fa-facebook fa-2x"></i>
            </Link>

          </div>

        </div>

      </div>
      <p>Copyright @ 2023 Media Player. Built with React.</p>

    </div>


  )
}

export default Footer