 import logo from '../images/logo.svg';
import '../App.css';


export default function About() {
  return (
            <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>ABOUT</h1>
                  <p>My name is Suha Fatima. I am a UI/UX Designer, currently based in Toronto. This is my experiment with React, so far it is quite awesome.</p>
              </header>
            </div>        
  );
}