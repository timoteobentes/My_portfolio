import React from 'react';
import './contact.css';
import photo2 from '../../img/photo2.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <div id="contact">
            <div className="texts_contact">
                <h2>CONTATO</h2>
            </div>
            <div className='hab-contact'>
                <div className='contact-line-1'>
                    <div className='C1'>
                        <a className='mail' href="mailto:bentestimoteo@gmail.com">bentestimoteo@gmail.com</a>
                        <a href="https://api.whatsapp.com/send?phone=5592994546580&text=Ol%C3%A" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size="2x"/> Whatsapp</a>
                    </div>
                    <div className='C2'>
                        <a href="https://www.linkedin.com/in/tim%C3%B3teo-bentes-03a083161/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/> LinkedIn</a>
                        <a href="https://github.com/timoteobentes"  rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/> GitHub</a>
                        <a href="https://www.instagram.com/bentest.t/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x"/> instagram</a>
                    </div>
                </div>
                <div className="photo_2">
                    <img src={photo2} className="Photo-timo2" alt="Foto" width={350} />
                </div>
            </div>
        </div>
    )
}

export default Contact;