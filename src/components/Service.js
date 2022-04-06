import React from 'react'
import './Service.css'
import Tours from  '../assets/images/tours.png'

function Service() {
    return (
        <div className='service component__space'>
            <div className="heading">
                <h1 className="heading">PROYECTOS</h1>
                <p className='heading p__color'>There are many variations of passages of Lorem Ipsum available,</p>
                <p className="heading p__color">but the majority have suffered alteration</p>
            </div>
            <div className="container">
                <div className="row">
                    {ProjectData.map(item => (
                    <div className="col__3">
                        <div className="cards">
                            <div>
                                <img src={Tours} alt={item.name} className='project__image'/>
                            </div>
                            <div className="service__box pointer">
                                <div className="service__meta">
                                    <h1 className="service__text">{item.name}</h1>
                                    <p className="service__text p__color">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service