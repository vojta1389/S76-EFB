import React from 'react'
import { Link } from 'react-router-dom'

const LandMenu = () => {
  return (
    <div className='container land-menu'>
      <div className='col-md-6 offset-md-3'>
        <Link to='/WB'>
          <button className='btn btn-gold btn-block mb-4'>
            Weight and Balance
          </button>
        </Link>
        <Link to='/checklist'>
          <button className='btn btn-gold btn-block mb-4'>Checklist</button>
        </Link>
        <Link to='/rfm'>
          <button className='btn btn-gold btn-block mb-4'>RFM</button>
        </Link>
        <button className='btn btn-gold btn-block mb-4'>MEL</button>
      </div>
    </div>
  )
}

export default LandMenu
