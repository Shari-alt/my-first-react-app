import './App.css';
import {BrowserRouter as Router,  
NavLink,
Switch,
Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
    <div className="App"> 
    <header> 
      <nav>
        <NavLink exact to="/"> Home </NavLink>
        <NavLink to="/About"> About </NavLink>
        <NavLink to="/Hobbies"> Hobbies </NavLink>
        <NavLink to="/Contact"> Contact </NavLink>
      </nav>
    </header>
    <main> 
      <Switch>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Hobbies">
          <Hobbies/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </main>
    </div>
    </Router>
  );
}

export default App;
