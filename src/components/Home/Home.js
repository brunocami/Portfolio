import React from 'react'
import './Home.css';
import Carrousel from '../animations/carrousel/carrousel';




function Home(props) {
    return (
        <div className='home' ref={props.goToHome}>
            <Carrousel/>
            <div className="home__bg">
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <h1 className="home__text PZ__10">
                                WELCOME TO MY WORLD
                            </h1>
                            <h2 className="home__text pz__10">
                                Hellow, I'm Bruno Cami
                            </h2>
                            <h3 className="home__text sweet">
                                Full Stack Developer
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home