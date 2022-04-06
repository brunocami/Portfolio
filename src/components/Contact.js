import React from 'react';
import './Contact.css';
import contactImg from "../assets/images/about-9.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contacto</h1>
                            <p className="hire__text white">Estoy disponible para trabajar. Contacto via telefono:</p>
                           <p className="hire__text white"><strong>+54 9 1158487444</strong> o email <strong>bruno.cami@hotmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Nombre *" />
                           <input type="text" className="contact email" placeholder="Email *" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
                <div className="col__2" style={{margin: "auto"}}>
                    <img src={contactImg} alt="" className="contact__img" style={{maxWidth: "500px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Contact