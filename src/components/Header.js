import React from 'react'
import NavBar from './NavBar'
import NavBarBody from './NavBarBody'

const Header = () => {
    return (
        <div style={{backgroundColor: "#F5F5F5", height: "100vh"}}>
            <NavBar/>
            <NavBarBody/>
        </div>
    )
}

export default Header
