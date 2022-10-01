import React from 'react'
import { useState } from 'react'
import './test.css'

export default function Test() {

  const [confirm, setConfirm] = useState(false)

  function handleDelete() {
    setConfirm(true)
  }

  return (
    <div className='d-flex align-center justify-content-center' style={{ marginTop: '5rem' }}>

      <div className='delete-confirmation' style={!confirm ? { display: 'block' } : { display: 'none' }}>
        <div>
          <i style={{ color: 'red' }} class="fa-regular fa-circle-xmark fa-5x"></i>
        </div>
        <div>
          <p className='delete-confirmation-q1'>Are you sure?</p>
        </div>
        <div>
          <p className='delete-confirmation-q2'>Do you really want to delete this Ad?</p>
        </div>
        <div className='delete-confimation-btn' style={{ justifyContent: 'space-around' }}>
          <button className='delete-confimation-btn1'>Cancel</button>
          <button onClick={handleDelete} className='delete-confimation-btn2'>Delete</button>
        </div>
      </div>
      
      <div className="delete-confirmed" style={confirm ? { display: 'block' } : { display: 'none' }}>
        <div>
          <i style={{ color: 'green' }} class="fa-regular fa-circle-check fa-5x"></i>
        </div>
        <div>
          <p className='delete-confirmation-q1' style={{ marginTop: '2rem' }}>Deleted</p>
        </div>
      </div>


    </div>
  )
}
