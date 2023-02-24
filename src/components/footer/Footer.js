import React from 'react'

const Footer = () => {
    return (
        <div className='footer-block-container'>
            <div className="footer-left">
                <ul className="footer-left-list">
                    <li className="list-item"><a href='/'>About</a></li>
                    <li className="list-item"><a href='/'>Help Center</a></li>
                    <li className="list-item"><a href='/'>Privacy Policy</a></li>
                    <li className="list-item"><a href='/'>Term of use</a></li>
                </ul>
            </div>
            <div className="footer-right"></div>
            <ul className="footer-right-list">
                <li className="list-item"> ©</li>
                <li className="list-item">2023 Training Amigo LLC.  All Rights Reserved</li>

            </ul>
        </div>
    )
}

export default Footer
