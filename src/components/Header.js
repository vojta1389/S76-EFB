import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-grey bg-gold mb-4'>
      <Link to='/'>
        <p className='navbar-brand' href='!#'>
          Sikorsky S-76B
        </p>
      </Link>
    </nav>
  )
}

export default Header
