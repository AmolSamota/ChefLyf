import React from "react";
import Container from "react-bootstrap/Container";
import MyCarousal from "./pages/carousal/carousal";
import MyNavbar from "./pages/navbar/navbar";
import About from "./pages/phase1/recepie";
import Ingredients from "./pages/ingredients/ingredients";
import CookingSteps from "./pages/steps/steps";
import FooterPanel from "./pages/footer/footer";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

import './App.css';

function App() {
  return (
    <div>
      
      <Router>
    <Route path="/" exact component={Home} />
    <Route path="/" exact component={Profile} />
      </Router>
      
      {/* <MyNavbar /> */}
      <Container>
          <About />
      </Container>
      <hr />
      <Ingredients />
      <hr />
      <CookingSteps />
      <he />
      <FooterPanel />

    </div>
  );
}

export default App;
