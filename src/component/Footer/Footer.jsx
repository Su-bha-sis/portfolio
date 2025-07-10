import React from 'react'
import './Footer.css'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="container-box footer d-flex  justify-content-center align-items-center">
      <div className="d-flex gap-2 justify-content-center align-items-center">
        <FaCopyright/> 2025 John Doe. All rights reserved.
      </div>
    </div>
  )
}

export default Footer