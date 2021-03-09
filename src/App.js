import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Nomatch from './Components/Nomatch/Nomatch';
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  return (
    <div className="App" >
     
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
              <Link to="/home">Home2</Link>
            </li>
            <li>
           
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/PostDetails/:id">
          <PostDetails></PostDetails>
          </Route>
         

          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
          <Nomatch></Nomatch>
          </Route>
        </Switch>
      </div>
    </Router>
 


    </div>
  );
}

export default App;
