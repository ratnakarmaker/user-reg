
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import Registration from './components/Registration';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar bg="primary" variant="dark">
          <Link to="/" className="ml-3 user nav_menu" href="#home">User Registration</Link>
          <Nav>
            <Link to="/post" className="text-white nav_menu" >Posts</Link>
          </Nav>
        </Navbar>
        <Switch>

          <Route exact path="/">
            <Registration />
          </Route>

          <Route exact path="/post">
            <Posts />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
