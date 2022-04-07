import React from 'react'
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaBold } from 'react-icons/fa';
import './NavBar.css';


const Navbar = (props) => {

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo" onClick={props.goToHome}>
                    <IconContext.Provider value={{ size: '1.5em', color: '#F9004D' }}>
                        <FaBold/>
                    </IconContext.Provider>
                </div>
                <div className="links__container">
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <div to='/' className='nav-links' onClick={props.goToHome}>
                                Home
                            </div>
                        </li>
                        <li>
                            <div className='nav-links' onClick={props.goToProjects}>
                                Projects
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='nav-links' onClick={props.goToAbout}>
                                About
                            </div>
                        </li>
                    </ul>

                    <div className="icons__container">
                        <IconContext.Provider value={{ size: '1.5em' }}>
                            <a href="https://github.com/brunocami" target="_blank" style={{ margin: "5px;" }}>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/bruno-cami-6126441b1/" target="_blank" style={{ margin: "5px;" }}>
                                <FaLinkedin />
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar