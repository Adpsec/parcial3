import React, { Component } from "react";
import './styles/App.css';
import { Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddInsta from "./components/add-insta.component";
import InstaList from "./components/insta-list.component";
import HomePage from "./components/home-page.component";
import Login from "./components/login.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
      <div className="menu-items">
        <div className="menu menu-left">
          <Link to={"/inicio"}>Inicio</Link>
          <Link to={"/list"}>Musicos</Link>
          <Link to={"/add"}>Agregar Musicos</Link>
          <Link to={"/login"}>Inicio Sesion</Link>
        </div>
      </div>
      <div className="menu menu-right">
        <span className="badge"></span>
      </div>
      </nav>

      

          <Routes>
            <Route path="list" element={<InstaList />} />
            <Route path="add" element={<AddInsta />} />
            <Route path="inicio" element={<HomePage />} />
            <Route path="login" element={<Login />} />
          </Routes>
      </div>
    );
  }
}

export default App;
