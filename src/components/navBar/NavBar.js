import React from 'react'
import { BrandLogo, Notify } from '../../asset/Icon'
import User from './../../asset/img/user.jpeg'

const NavBar = () => {
    return (
        <div className='nav-bar-container'>
            <div className="brand-icon"><BrandLogo /></div>
            <div className="left-menu">
                <div className="notifications-bell"><span className='notify-indicator'></span>
                    <Notify />
                </div>
                <div className="user-detail">
                    <div className="user-greeting">Hi  <strong>Adam,</strong></div>
                    <div className="user-avatar" style={ { backgroundImage: `url(${User})` } }>
                        {/* <img className='user-image' src={User} /> */ }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
