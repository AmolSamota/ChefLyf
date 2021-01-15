import React, { useState } from "react";
import MyNavbar from "./pages/navbar/navbar";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import Recipe from "./components/recipe";
import Save from "./components/saved";
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { projectFirestore, projectStorage } from "../src/firebase/config";
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div>
      <Router>
        <MyNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/recipe" exact component={Recipe} />
        <Route path="/saved" exact component={Save} />
      </Router>
        {/* <FooterPanel /> */}
        
      </div>
    );
  }
  
}

export default App;
