import React from 'react'
import './About.css';
import { AboutData } from '../constants/constants'
import MiFoto from '../assets/images/about.jpg';
 
function About(props) {
 
    return (
        <div className='about component__space'  ref={props.goToAbout}>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={MiFoto} alt="" className="about__img" />
                    </div>
                    <div className="col__2">
                        <div className="sectionDivider"></div>

                        <h1 className="about__heading">
                            Sobre Mi
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                Actualmente me encuentro estudiando diseño industrial en el Instituto de Tecnología ORT, donde hago uso constante de herramientas para el diseño digital, desde PHOTOSHOP, ILLUSTRATOR para el diseño grafico hasta RHINOCEROS, AUTOCAD, KEYSHOT para el diseño en 3D.
                            </p>
                            <p className="about__text p__color">
                                En 2020 comencé a estudiar programación arrancando desde JavaScript, completando el curso de Digital House "Programacion Web Full Stack" donde aprendí con profundidad los conceptos de JAVASCRIPT, HTML, CSS y SQL necesarios para el desarrollo web.
                            </p>
                            <p className="about__text p__color">
                                En 2021 continúe mi formación aprendiendo a desarrollar en REACTJS, mientras hacia una experiencia laboral en la empresa ReachOut como DESARROLLADOR WEB Jr. <br />
                                <div className="sectionDivider"></div>
                                APTITUDES<br />
                            </p>
                            <div className="aptitudes">
                                {AboutData.map(item => (
                                    <div className="bttn">
                                        {item.aptitud}
                                    </div>
                                ))}
                            </div>
                            <div className="about__button d__flex align__items__center">
                                <a href=""><button className='about btn pointer'>Download CV</button></a>
                                <a href=""><button className='about btn pointer'>Hire Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About