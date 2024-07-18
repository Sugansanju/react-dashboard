import React from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./assets/profile.png";
import { Image } from "react-bootstrap";
import { BsFillBellFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaChartLine, FaUsers } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BiPowerOff } from "react-icons/bi";
import { FiFile } from "react-icons/fi";
import './MainNavBar.css'

function MainNavBar() {
  return (
    <>
      <Navbar key="md" expand="md" className="custom-color mb-3 d-md-none">
        <Container fluid>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md'/>
          <Navbar.Brand href="#">
            <div className="d-md-none justify-content-around">
              <span className="fs-3 pe-2 pt-2 icon-wrap">
                <FaCalendarAlt color="white"/>
              </span>
              <span className="fs-3 pe-2 pt-2  icon-wrap">
                <BsFillBellFill color="white"/>
                <span className="nav-badge"></span>
              </span>
              <span className="fs-3 pe-2 pt-2  icon-wrap">
                <MdMessage color="white"/>
                <span className="nav-badge"></span>
              </span>
              <span className="pt-2">
                {" "}
                <Image src={logo} style={{ borderRadius: "50px" }}></Image>
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby='offcanvasNavbarLabel-expand-md'
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id='offcanvasNavbarLabel-expand-md'
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="offcanvas-layout">
                <div className="center-icons">
                  <Nav.Item>
                    <NavLink>
                      <MdDashboard size={40} /> &nbsp;&nbsp; Dashboard
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink>
                      <FaChartLine size={40} /> &nbsp;&nbsp; Chart
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink>
                      <FaUsers size={40} /> &nbsp;&nbsp; Users
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink>
                      <FiFile size={40} /> &nbsp;&nbsp; Meeting
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink>
                      <CiSettings size={40} /> &nbsp;&nbsp; Setting
                    </NavLink>
                  </Nav.Item>
                </div>
                <Nav.Item>
                  <NavLink>
                    <BiPowerOff size={40} /> &nbsp;&nbsp;Logout
                  </NavLink>
                </Nav.Item>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </>
  );
}

export default MainNavBar;
