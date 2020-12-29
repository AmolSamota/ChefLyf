import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../../assests/recepies/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";


import "./navbar.css";

const MyNavbar = () => {
  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
    
  <Navbar.Brand href="#home">
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Image className="logo" alt="profile" src={logo} thumbnail fluid />
    <Nav className="mr-auto">
        <Nav.Link href="#home"><AiOutlineHome /></Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#top">< AiOutlineSearch /></Nav.Link>
      <Nav.Link href="#about">< AiOutlineBars /></Nav.Link>
      <Nav.Link href="#profile">< FiUser /></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </>
  );
};
export default MyNavbar