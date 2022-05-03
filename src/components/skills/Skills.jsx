import React from 'react';
import './skills.css';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
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
                        <FontAwesomeIcon icon={faGitAlt} />
                        <p>Web Development</p>
                    </div>
                    <div className='Js'><p>JavaScript</p></div>
                    <div className='React'><p>ReactJS</p></div>
                    {/* <FontAwesomeIcon icon={['fas', 'github']} /> */}
                </div>
                <div className='skill-line-2'>
                    <div className='GG'><p>Git e Github</p></div>
                    <div className='Boot'><p>Bootstrap</p></div>
                    <div className='SQL'><p>PostgreSQL</p></div>
                    {/* <FontAwesomeIcon icon={['fas', 'github']} /> */}
                </div>
            </div>
        </div>
    )
}

export default Skills;