import React from 'react';
import './contact.css';
import photo2 from '../../img/photo2.png';

const Contact = () => {
    return (
        <div id="contact">
            <div className="texts_contact">
                <h2>CONTACT</h2>
            </div>
            <div className='hab-contact'>
                <div className='contact-line-1'>
                    <div className='C1'>
                        <form>
                            <input className='input' type='text' placeholder='Nome'></input><br></br><br></br>
                            <input className='input' type='text' placeholder='Titulo'></input><br></br><br></br>
                            <textarea className='input' type='text' placeholder='Mensagem'></textarea><br></br>
                        </form>
                    </div>
                    <div className="photo_2">
                        <img src={photo2} className="Photo-timo2" alt="Foto" width={150} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;