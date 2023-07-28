import React from 'react'
import Logo from '../../Header/Logo/Logo';

import './Navbar.css'
export default function Navbar({children}) {

  return (
    <div className="Nav">
       <Logo />
       {children}

  
    </div>
  )
}
