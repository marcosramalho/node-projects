import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import AddTutorialsComponent from "./components/AddTutorialsComponent";
import TutorialsComponent from "./components/TutorialsComponent";
import ListTutorialsComponent from "./components/ListTutorialsComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={ListTutorialsComponent} />
          <Route exact path="/add" component={AddTutorialsComponent} />
          <Route path="/tutorials/:id" component={TutorialsComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
