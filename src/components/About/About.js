import React from 'react'
import './About.css';
import { AboutData } from '../../constants/constants'
import MiFoto from '../../assets/images/resume.png';
import { saveAs } from "file-saver";
import resume from "../../assets/Resume/CV_BRUNO_CAMI.pdf"; // Import the file

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
                                As a full stack web developer, my biggest motivation is to create innovative technological solutions that improve people's lives. With one year of experience at Reachout, I have collaborated on full stack projects and developed my front-end development skills. Additionally, thanks to my training in industrial design, I have a unique perspective to tackle the challenges of technology and design. If chosen, you can expect a creative and results-oriented approach to any project I tackle.
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