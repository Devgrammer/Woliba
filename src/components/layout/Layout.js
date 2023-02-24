import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navBar/NavBar'
import SideBar from '../sideBar/SideBar'

const Layout = (props) => {
    return (
        <div className='layout-contianer'>
            <NavBar />
            <div className="body-container">
                <SideBar />
                <div className='output-area-container'>
                    { props.children }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
