import React, { useState } from 'react';
import './Contact.css';
import contactImg from "../../assets/images/about-9.jpg"
import ContactForm from './ContactForm';
import { ToastContainer, toast } from 'react-toastify';

function Contact(props) {
    const [isSubmitted, setIsSubmitted] = useState();

    const notify = () => toast("Gracias Por Contactarme");

    function submitForm() {
        setIsSubmitted(true);
        notify();
    }



    return (
        <div className="contact component__space" id="Contact" ref={props.goToContact}>
            <div className="row">
                <div className="col__2">
                    <div className="contact__meta">
                        <h1 className="hire__text">Contacto</h1>
                        <p className="hire__text white">Estoy disponible para trabajar. Contacto via telefono:</p>
                        <p className="hire__text white"><strong>+54 9 1158487444</strong> o email <strong>bruno.cami@hotmail.com</strong></p>
                    </div>
                    <ContactForm submitForm={submitForm}/>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Contact