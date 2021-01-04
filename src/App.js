import React from "react";
import MyNavbar from "./pages/navbar/navbar";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import Recipe from "./components/recipe";
import Save from "./components/saved";
import FooterPanel from "./pages/footer/footer";
import './App.css';
function App() {
  
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

export default App;
