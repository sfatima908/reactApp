import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import './App.css';



export default function App() {
  return (
    <Router>
      <div>
        <body>
          <header>
            <nav>
              <ul>
                <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <main>
            <Switch>
              <Route path="/about">
                <About />            
              </Route>
              <Route path="/projects">
                <Projects />             
              </Route>
              <Route path="/contact">
                <Contact />            
              </Route>
              <Route path="/">
                <Home />            
              </Route>
            </Switch>
          </main>
        </body>

        <footer>
          <div class="bg-light py-4">
            <div class="container text-center">
              <p class="text-muted mb-0 py-2">© 2021</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}