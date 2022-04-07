import React from 'react'
import validate from '../../Validations/ValidateInfo';
import useForm from '../../Validations/useForm';
import './Contact.css'
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

   
    return (
        <form onSubmit={handleSubmit} className="contact__box" noValidate>
            <div className="input__box">
                <input type="text" className="contact name" name='name' placeholder="Nombre *" value={values.username} onChange={handleChange} />
                {errors.username && <p style={{color: "white"}}>{errors.username}</p>}
                <input
                    type="email"
                    name='email'
                    className="contact email"
                    placeholder="Email *"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{color: "white"}}>{errors.email}</p>}
                <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                <button className="btn contact pointer" type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default ContactForm