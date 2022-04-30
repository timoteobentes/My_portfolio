import React from 'react';
import './projects.css';
import photo3 from '../../img/photo3.png';

const Projects = () => {
    return (
        <div id="projects">
            <div className="texts_projects">
                <h2>PROJECTS</h2>
            </div>
            <div className='hab-projects'>
                <div className='projects-line-1'>
                    <div className='P1'><p>Projeto 1</p></div>
                    <div className='P2'><p>Projeto 2</p></div>
                </div>
                <div className='projects-line-1'>
                    <div className='P3'><p>Projeto 3</p></div>
                    <div className='P4'><p>Projeto 4</p></div>
                    {/* <FontAwesomeIcon icon={['fas', 'github']} /> */}
                </div>
            </div>
            <div className="photo_3">
                <img src={photo3} className="Photo-timo3" alt="Foto" width={150} />
            </div>
        </div>
    )
}

export default Projects;