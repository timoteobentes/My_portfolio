import React from 'react';
import './about.css';
import photo from '../../img/photo.jpeg'

const About = () => {
    return (
        <div id="about">
            <div className="texts_about">
                <h2>SOBRE MIM</h2>
            </div>
            <div className='hab-about'>
                <div className='about-line-1'>
                    <div className='A1'>
                        <p>
                            Sou Timóteo Bentes, tenho 18 anos, moro em Manaus, Amazonas. <br></br>
                            Amo tecnologia, e desde que tive contato com a programação, não quis parar de codar.
                            Estou no 1º período no curso de Ciência da Computação pela faculdade Estácio;
                            Meu objetivo de carreira é tornar um Desenvolvedor FullStack, contribuindo para a empresa e para a sociedade,
                            inovando e projetando. <br></br> <br></br>
                            Independente do trabalho ou serviço, busco dar o meu melhor.
                            <br></br> <br></br>
                            Outras coisas sobre mim:<br></br>
                            Amo passar tempo com minha família;
                            Amo cachorros;
                            Team MCU;
                        </p>
                    </div>
                    <div className="photoA">
                        <img src={photo} className="Photo-timo" alt="Foto" width={350} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;