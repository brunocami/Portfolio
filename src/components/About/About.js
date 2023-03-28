import React from 'react'
import './About.css';
import { AboutData } from '../../constants/constants'
import MiFoto from '../../assets/images/resume.png';
import { saveAs } from "file-saver";
import resume from "../../assets/Resume/resume[2023]_english.pdf"; // Import the file

function About(props) {

    // const saveFile = () => {
    //     saveAs(
    //         "../../assets/Resume/resume[2023]_english",
    //         "BrunoCamiResume.pdf"
    //     );
    // };

    return (
        <div className='about component__space' ref={props.goToAbout}>
            <div className="container">
                <div className="row">
                    <div className="col__2 square__img">
                        <img src={MiFoto} alt="" className="about__img" />
                    </div>
                    <div className="col__2">
                        <div className="sectionDivider"></div>

                        <h1 className="about__heading">
                            About Me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                In 2022 i’ve graduated as an industrial designer and I’ve been
                                studying web development since 2020. In all these years I’ve taken
                                Full Stack, Advanced Javascript, ReactJs development and Data
                                Science course and i’ve learn many skills in diferent technologies.
                            </p>
                            <p className="about__text p__color">
                                I have 1 year experience working as a Front End developer at
                                ReachOut, where I was able to put my knwoledge into practice and
                                learned the work dynamics of an IT team.
                                I am currently available to start working full time.
                            </p>

                            <div className="aptitudes">
                                {AboutData.map(item => (
                                    <div className="bttn">
                                        {item.aptitud}
                                    </div>
                                ))}
                            </div>
                            <div className="about__button d__flex align__items__center">
                                <a href={resume}><button className='about btn pointer'>Download CV</button></a>
                                <button className='about btn pointer' onClick={props.goToContact}>Contacto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About