import React from "react";
import Container from "react-bootstrap/Container";
import MyCarousal from "./pages/carousal/carousal";
import MyNavbar from "./pages/navbar/navbar";
import About from "./pages/phase1/recepie";
import Ingredients from "./pages/ingredients/ingredients";
import CookingSteps from "./pages/steps/steps";
import FooterPanel from "./pages/footer/footer";

import './App.css';

function App() {
  return (
    <div>
      
      {/* <MyCarousal /> */}
      <MyNavbar />
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
