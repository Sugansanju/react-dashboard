import React from "react";
import { Row, Col } from "react-bootstrap";
import SideBar from "./Components/SideBar/SideBar";
import MainContent from "./Components/MainContent/MainContent";
import Status from "./Components/Status/Status";
import MainNavBar from "./MainNavBar";
function Dashboard() {
  return (
    <>
    <MainNavBar/>
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
