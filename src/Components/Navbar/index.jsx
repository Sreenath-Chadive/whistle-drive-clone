import React, { useState } from 'react'
import './index.css'
import wdLogo from "../../Assets/Images/WhistleDriveLogo.png"
import { Button } from '@mui/material'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

  const [state, setState] = useState(false)
  const handleToogle = () => {
    setState(prev => !prev)
  }


  return (
    <div className='navbar-main'>
      <div className='nav-container'>
        <div>
          <img src={wdLogo} alt="Company Logo" height='43px' width='180px' style={{ cursor: 'pointer' }} />
        </div>
        <div className='nav-content'>
          <p>Enterprise Logistics</p>
          <p>Employee Transportation</p>
          <p>WhistleElectric</p>
          <p>Company</p>
          <Button
            variant="contained"
            disableElevation
            style={{
              width: "180px", height: '40px',
            }}>Contact Us</Button>
        </div>

        <div className='toogle-navbar'>
          <div onClick={handleToogle}>
            <GiHamburgerMenu style={{ width: '35px', height: '35px', marginTop: '10px', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      {
        state &&
        <div className='toogle-container'>
          <p>Enterprise Logistics</p>
          <p>OS for Logistics</p>
          <p>Employee Transportation</p>
          <p>OS for Mobility</p>
          <p>WhistleElectric</p>
          <p>Company </p>
          <Button
            variant="contained"
            disableElevation
            style={{
              width: "100%", height: '40px',
            }}>Contact Us</Button>
        </div>
      }
    </div>
  )
}

export default Navbar