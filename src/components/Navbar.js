import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import React from 'react'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        <MdFingerprint className='navbar-icon' />
                        Pesacoin
                    </Link>

                    <div className="menu-icon">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
