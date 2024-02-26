import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHome, setScrolledPastHome] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight - 130) {
        setScrolledPastHome(true);
      } else {
        setScrolledPastHome(false);
      }

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      {scrolledPastHome ? (
        <></>
      ) : (
        <Navbar
          expand="md"
          className={`navbar ${scrolled ? "scrolled" : ""}`}
          style={{
            backgroundColor: scrolled ? "#DCDCDC" : "transparent",
            transition: "background-color 0.3s",
          }}
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                alt="Sacred Pixel"
                style={{ width: "180px", height: "auto" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto me-7">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                  style={{ color: "black", fontWeight: "bold" }} // Add fontWeight: "bold"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  href="#services"
                  className={
                    activeLink === "services"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("services")}
                  style={{ color: "black", fontWeight: "bold" }} // Add fontWeight: "bold"
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  href="#about-us"
                  className={
                    activeLink === "about-us"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("about")}
                  style={{ color: "black", fontWeight: "bold" }} // Add fontWeight: "bold"
                >
                  About
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/sacred-pixel-92623b2a9/">
                    <img src={navIcon1} alt="" className="icon-black" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <img src={navIcon2} alt="" className="icon-black" />
                  </a>
                  <a href="https://www.instagram.com/sacredpxl/">
                    <img src={navIcon3} alt="" className="icon-black" />
                  </a>
                </div>

                <HashLink to="#connect">
                  <button className="vvd">
                    <span style={{ color: "black" }}>Let’s Connect</span>
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </Router>
  );
};
