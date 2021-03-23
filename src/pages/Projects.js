 import logo from '../images/logo.svg';
import '../App.css';


export default function Projects() {
  return (
            <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>PROJECTS</h1>
                  <p>To check out our projects, visit suhafatima.me</p>
                  <a className="App-link" href="https://suhafatima.me" target="_blank" rel="noopener noreferrer">Or just click here</a> 
              </header>
            </div>        
  );
}