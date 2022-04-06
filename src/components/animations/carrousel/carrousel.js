import React from 'react'
import './carrousel.css'
import { IconContext } from "react-icons";
import { FaNode, FaGitAlt, FaJsSquare, FaReact, FaCss3Alt, FaHtml5, FaDatabase } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const Carrousel = () => {

    return (
        <div class="carrousel__container">
            <div class="carousel">
            <IconContext.Provider value={{ size: '1em', color: "#f9004d" }}>
                <div class="carousel__face"><span className='carrousel__span'><FaNode/></span></div>
                <div class="carousel__face"><span className='carrousel__span'><FaGitAlt/></span></div>
                <div class="carousel__face"><span className='carrousel__span'><FaJsSquare/></span></div>
                <div class="carousel__face"><span className='carrousel__span'><FaReact/></span></div>
                <div class="carousel__face"><span className='carrousel__span'><FaCss3Alt/></span></div>
                <div class="carousel__face"><span className='carrousel__span'><FaHtml5/></span></div>
                <div class="carousel__face"><span className='carrousel__span'><FaDatabase/></span></div>
                <div class="carousel__face"><span className='carrousel__span'><SiAdobephotoshop/></span></div>
                <div class="carousel__face"><span className='carrousel__span'><SiAdobeillustrator/></span></div>
            </IconContext.Provider>
            </div>
        </div>
    )
}

export default Carrousel