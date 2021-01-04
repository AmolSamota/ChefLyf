import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../../assests/recepies/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";


import "./navbar.css";

const MyNavbar = () => {
  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
    
  <Navbar.Brand href="#home">
      <Image className="logo" alt="profile" src={logo} thumbnail fluid />
      &nbsp;ChefLyf
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
  
    <Nav className="mc-auto">
    <form className="search-form">
                    <input className="search-bar" type="text"/>
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </form>
    </Nav>
    <Nav className="ml-auto">
        <Nav.Link  href="#home"><Link to="/home"><AiOutlineHome className="linknav" /></Link></Nav.Link>
      <Nav.Link href="#top"><Link to="/recipe">< AiOutlineSearch className="linknav" /></Link></Nav.Link>
      <Nav.Link href="#about"><Link to="/saved">< AiOutlineBars className="linknav" /></Link></Nav.Link>
      <Nav.Link href="#profile"><Link to="/profile">< FiUsers className="linknav" /></Link></Nav.Link>
    </Nav>
    
  {/* </Navbar.Collapse> */}
</Navbar>
    </>
  );
};
export default MyNavbar