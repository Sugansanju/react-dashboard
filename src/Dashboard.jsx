import React from "react";
import { Container, Row, Col,Navbar,Offcanvas,Nav } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import SideBar from "./Components/SideBar/SideBar";
import MainContent from "./Components/MainContent/MainContent";
import Status from "./Components/Status/Status";
import Icons from "./Components/Status/Icons";
import { MdDashboard } from "react-icons/md";
import { FaChartLine, FaUsers } from "react-icons/fa";
import {  CiSettings } from "react-icons/ci";
import { BiPowerOff } from "react-icons/bi";
import { FiFile } from "react-icons/fi";
function Dashboard() {
  return (
    <>
      {/* <div>
      <div className="d-flex flex-wrap " >
        <div className="d-none d-lg-inline" style={{ marginTop: "20px"}}>
          <SideBar />
        </div>
        <div className="order-1" style={{ marginTop: "20px",padding:"10px"}}>
          <MainContent />
        </div>
        <div className="order-2" style={{ marginTop: "20px" }}>
          <Status />
        </div>
      </div>
      </div> */}
     <Navbar key="md" expand="md" className="custom-color mb-3 d-md-none">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Brand href="#"><Icons/></Navbar.Brand>
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-md'
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                </Offcanvas.Title>
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
      <Row className="p-0 m-0">
        <Col lg={1} className="d-none d-lg-inline p-0 m-0">
          <SideBar />
        </Col>
        <Col md={8} sm={12} xs={12} className="mt-4">
          <MainContent />
        </Col>
        <Col md={3} sm={12} xs={12} className="mt-4">
          <Status />
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
