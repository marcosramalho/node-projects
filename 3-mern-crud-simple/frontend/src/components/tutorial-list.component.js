import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import TutorialService from '../services/tutorial.service';

class TutorialList extends Component {

  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ''
    };

  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    })
  }

  retrieveTutorials() {
    TutorialService.getAll().then(response => {
      this.setState({ tutorials: response.data });
      console.log(response);
    }).catch(e => {
      console.error(e);
    })
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    })
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    })
  }

  removeAllTutorials() {
    TutorialService.deleteAll().then(response => {
      console.log(response);
      this.refreshList();
    }).catch(e => {
      console.error(e);
    })
  }

  searchTitle() {
    TutorialService.findByTitle(this.state.searchTitle).then(response => {
      this.setState({
        tutorials: response.data
      });

      console.log(response);
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex} = this.state;


    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input 
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" onClick={this.searchTitle}>
                Search
              </button>
            </div>
          </div>
          
        </div>
        <div className="col-md-6">
          <h4>Tutorials List </h4>

          <ul className="list-group">
          { tutorials && tutorials.map((tutorial, index) => (
            <li 
              className={"list-group-item " + (index === currentIndex ? "active" : "") }
              onClick={() => this.setActiveTutorial(tutorial, index)}
              key={index}
            >
              {tutorial.title}
            </li>
          ))}
          </ul>

          <button className="m-3 btn btn-sm btn-danger" onClick={this.removeAllTutorials}>Remove All</button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge bg-warning"
              >
                Edit
              </Link>
            </div>
          ) : ( 
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>

      </div>
    )
  }
}

export default TutorialList;