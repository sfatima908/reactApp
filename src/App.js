import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
 import logo from './logo.svg';
import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            {/* <About /> */}
            <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>***ABOUT <code>src/App.js</code> and save to reload.</p>
                  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> 
              </header>
            </div>
          </Route>
          <Route path="/users">
            {/* <Users /> */}
            <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>***USERS <code>src/App.js</code> and save to reload.</p>
                  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> 
              </header>
            </div>
          </Route>
          <Route path="/">
            {/* <Home /> */}
            <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>***HOME <code>src/App.js</code> and save to reload.</p>
                  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> 
              </header>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}