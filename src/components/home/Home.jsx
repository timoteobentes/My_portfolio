import React from 'react';
import './home.css';
import photo1 from '../../img/photo1.png'

const Home = () => {
    return (
        <div id="home">
            <div className="texts">
                <h1>Timóteo Bentes</h1>
                <h4 className='desc effect'>Front-End Developer Jr</h4>
            </div>
            <div className="photo">
                <img src={photo1} className="Photo-tim" alt="Foto" width={350} />
            </div>
            <div className="see-github">
                <a href="https://github.com/timoteobentes?tab=repositories" className="github-home">See Repositories</a>
            </div>
        </div>
    )
}

export default Home;