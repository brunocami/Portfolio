import React from 'react'
import './Home.css';



function Home(props) {
    return (
        <div className='home' ref={props.goToHome}>
            <div className="home__bg">
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <h1 className="home__text PZ__10">
                                WELCOME TO MY WORLD
                            </h1>
                            <h2 className="home__text pz__10">
                                Hola, Soy Bruno Cami
                            </h2>
                            <h3 className="home__text sweet">
                                Full Stack Developer
                            </h3>
                        </div>
                    </div>
                    {/* <div className="spin-container">
                        <div class="cube-container spin">
                            <div class="cube">
                                <figure class="side front">
                                    <h1 style={{ color: "#efd81d" }}>JavaScript</h1>
                                </figure>
                                <figure class="side back">
                                    <h1 style={{ color: "#c50f00" }}>HTML5</h1>
                                </figure>
                                <figure class="side left">
                                    <h1 style={{ color: "#79d8f7" }}>ReactJs</h1>
                                </figure>
                                <figure class="side right">
                                    <h1 style={{ color: "#d74a34" }}>Git</h1>
                                </figure>
                                <figure class="side top">
                                    <h1 style={{ color: "#254bdd" }}>CSS</h1>
                                </figure>
                                <figure class="side bottom">
                                    <h1 style={{ color: "#7baa1a" }}>NodeJs</h1>
                                </figure>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="spin-container">
                        
                    </div> */}
                </div>


            </div>
        </div>
    )
}

export default Home