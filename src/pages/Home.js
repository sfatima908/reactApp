 import logo from '../images/logo.svg';
import '../App.css';


export default function Home() {
  return (
            <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>HOME</h1>
                  <p>Welcome to our website. Click on the navigation to check out other links</p>
                  <a className="App-link" href="https://github.com/sfatima908/reactApp" target="_blank" rel="noopener noreferrer">Link to Github Repo</a> 
              </header>
            </div>        
  );
}