import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistory, getAllHistory } from '../services/allapi';


function Watchhist() {

  const [history, setHistory] = useState([])

  const allHistory = async () => {
    const { data } = await getAllHistory()
    //  console.log(data);
    setHistory(data)
  }
  console.log(history);
  // function to remove histroy
  const removehistory= async(id)=>{
    await deleteVideoHistory(id)
    // to get the remianing history
    allHistory()
  }

  useEffect(() => {
    allHistory()
  }, [])
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</Link>
      </div>
      <table className='table mb-5 mt-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>CAPTION</th>
            <th>URL</th>
            <th>TIME STAMB</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {history?.length > 0 ?
            history?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.caption}</td>
                <td><a href={`${item.emplink}?autoplay=1`} target='_blank'>{item.emplink}</a></td>
                <td>{item.timestamp}</td>
                <td><button onClick={()=>removehistory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
            ))
            :
            <p className='mt-5 fw-bolder fs-4 text-danger'>no watch history</p>
          }
        </tbody>
      </table>
    </>
  )
}

export default Watchhist