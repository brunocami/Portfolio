import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaBold } from 'react-icons/fa';
import './NavBar.css';


const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);



    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div to="/" className="navbar-logo" onClick={props.goToHome}>
                    <IconContext.Provider value={{ size: '1.5em', color: '#F9004D' }}>
                        <FaBold/>
                    </IconContext.Provider>
                </div>
                <div className="links__container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'bi bi-chevron-left' : 'bi bi-list red'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <div to='/' className='nav-links' onClick={props.goToHome}>
                                Home
                            </div>
                        </li>
                        <li>
                            <Link to='/products' className='nav-links' onClick={props.goToProjects}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className='nav-links' onClick={props.goToAbout}>
                                About
                            </div>
                        </li>
                    </ul>

                    <div className="icons__container">
                        <IconContext.Provider value={{ size: '1.5em' }}>
                            <a href="https://github.com/brunocami" style={{ margin: "5px;" }}>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/bruno-cami-6126441b1/" style={{ margin: "5px;" }}>
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