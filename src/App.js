import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import BulidTodo from "./components/bulid-todo.component";
import ModifyTodo from "./components/modify-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./Logo-onUrDesk.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://onurdesk.com">
              <img src={logo} width="30" height="30" alt="onurdesk.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/bulid" className="nav-link">Bulid Todo</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/modify/:id" component={ModifyTodo} />
          <Route path="/bulid" component={BulidTodo} />
        </div>
      </Router>
    );
  }
}

export default App;