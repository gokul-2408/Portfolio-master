import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { Anchor } from "react-bootstrap";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            
            <Nav.Item style={{marginTop:"12px",marginRight:"15px"}}>
            <AnchorLink href="#home" className="custom-link">
                <AiOutlineHome style={{marginTop:"2px", marginBottom: "2px" }} /> Home
                </AnchorLink>
              
            </Nav.Item>

            <Nav.Item style={{marginTop:"12px",marginRight:"15px"}}>
              <AnchorLink href="#about" className="custom-link">
                <AiOutlineUser style={{marginTop:"2px",marginBottom:"2px"}} /> About
              </AnchorLink>
            </Nav.Item>

            <Nav.Item style={{marginTop:"12px",marginRight:"15px"}}>
            <AnchorLink href="#project" className="custom-link">
               
                <AiOutlineFundProjectionScreen
                  style={{ marginTop:"2px" ,marginBottom: "2px" }}
                />{" "}
                Projects
                </AnchorLink>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;