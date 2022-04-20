import './Main.css';
import photo from './photo.jpeg';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="wrapper">
      <div className="nav">
        <h3>Timóteo Bentes</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutMe">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
        {/* <p>
          <code>Meu primeiro projeto com React =)</code>
        </p> */}
      </div>
      <div id="home">
        <div className="texts">
          <h1>Timóteo Bentes</h1>
          <h4>HTML Web Developer</h4>
        </div>
        <div className="photo">
          <img src={photo} className="Photo-tim" alt="Foto" width={300} />
        </div>
        <div className="see-github">
          <a href="https://github.com/timoteobentes?tab=repositories" className="github-home">See Repositories</a>
        </div>
      </div>

      <div id="skills">
        <div className="texts_skills">
          <h2>SKILLS</h2>
        </div>
        <div>
          <FontAwesomeIcon icon={['fas', 'github']} />
        </div>
      </div>
    </div>
  );
}

export default App;
