import heroImg from './assets/hero.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="profile-card">
        <img src={heroImg} alt="Sudip Lo" className="avatar" />
        <h1 className="name">Sudip Lo</h1>
        <p className="title">Developer</p>
        <p className="tagline">I'm Sudip Lo</p>
        <p className="subtagline">Crafting digital experiences</p>
        <p className="description">
          Passionate about creating impactful web and mobile applications.
          Let's turn ideas into reality.
        </p>
        <div className="button-group">
          <button className="btn btn-primary">Explore Work</button>
          <button className="btn btn-secondary">Resume</button>
        </div>
      </div>
    </div>
  );
}

export default App;