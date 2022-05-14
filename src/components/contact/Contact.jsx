import React from 'react';
import './contact.css';
import photo2 from '../../img/photo2.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("contactForm");
    if (state.succeeded) {
        return <p>Obrigado por enviar!</p>
    }
    return (
        <div id="contact">
            <div className="texts_contact">
                <h2>CONTATO</h2>
            </div>
            <div className='hab-contact'>
                <div className='contact-line-1'>
                    <div className='C1'>
                        <form onSubmit={handleSubmit}>
                            <input className='input' type='text' placeholder='Nome'></input><br></br><br></br>
                            <ValidationError prefix="input" field="input" errors={state.errors}/>
                            <input className='input' type='text' placeholder='Titulo'></input><br></br><br></br>
                            <textarea className='input' type='text' placeholder='Mensagem'></textarea><br></br>
                            <button type='submit' disabled={state.submitting} className='btn'>ENVIAR</button>
                        </form>
                    </div>
                    <div className="photo_2">
                        <img src={photo2} className="Photo-timo2" alt="Foto" width={350} />
                    </div>
                </div>
                <div className='rs'>
                    <a href="https://github.com/timoteobentes"  rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                    <a href="https://www.instagram.com/bentest.t/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                    <a href="https://www.linkedin.com/in/tim%C3%B3teo-bentes-03a083161/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    <a href="https://api.whatsapp.com/send?phone=5592994546580&text=Ol%C3%A" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size="2x"/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;