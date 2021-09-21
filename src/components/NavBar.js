import React from 'react'
import NavBarIcon from './NavBarIcon'

const NavBar = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-between" style={{height: "25vh"}}>
            <NavBarIcon/>
            <nav class="navbar navbar-expand-lg navbar-light m-1 m-lg-auto" style={{backgroundColor: "#F5F5F5"}}>
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SHOP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ'S</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">AUTENTICITY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">RETURN & REFUNDS</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
