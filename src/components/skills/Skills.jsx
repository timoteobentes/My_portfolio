import React from 'react';
import './skills.css';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
    return (
        <div id="skills">
            <div className="texts_skills">
                <h2>SKILLS</h2>
            </div>
            <div className='hab-skills'>
                <div className='skill-line-1'>
                    <div className='WebDev'>
                        <FontAwesomeIcon icon={faHtml5} size="3x"/>
                        <FontAwesomeIcon icon={faCss3Alt} size="3x"/>
                        <p>Web Development</p>
                    </div>
                    <div className='Js'>
                        <FontAwesomeIcon icon={faJsSquare} size="3x"/>
                        <p>JavaScript</p>
                    </div>
                    <div className='React' onMouseOver='ReactOver' onMouseOut={ document.getElementsByClassName('React').innerHTML = 'Aprendendo ainda, mas sei um pouco =p' }>
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <p>ReactJS</p>
                    </div>
                    {/* <FontAwesomeIcon icon={['fas', 'github']} /> */}
                </div>
                <div className='skill-line-2'>
                    <div className='GG'>
                        <FontAwesomeIcon icon={faGitAlt} size="3x"/>
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                        <br></br><br></br>
                        <p>Git e Github</p>
                    </div>
                    <div className='Boot'>
                        <FontAwesomeIcon icon={faBootstrap} size="3x"/>
                        <p>Bootstrap</p>
                    </div>
                    <div className='SQL'>
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <p>PostgreSQL</p>
                    </div>
                    {/* <FontAwesomeIcon icon={['fas', 'github']} /> */}
                </div>
            </div>
        </div>
    )
}

export default Skills;