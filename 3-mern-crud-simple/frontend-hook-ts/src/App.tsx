import React, { Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddTutorialComponent from "./components/AddTutorialsComponent";
import TutorialComponent from "./components/TutorialsComponent";
import TutorialsListComponent from "./components/TutorialsComponent";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          MRTECH
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
          <Route exact path={["/", "/tutorials"]} component={TutorialsListComponent} />
          <Route exact path="/add" component={AddTutorialComponent} />
          <Route path="/tutorials/:id" component={TutorialComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
