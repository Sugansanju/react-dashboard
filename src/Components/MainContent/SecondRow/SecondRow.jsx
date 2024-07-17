import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./SecondRow.css";
import ChartContent from "./Chart/ChartContent";
function SecondRow() {
  return (
    <>
      <Row>
        <Col md={3} sm={12} xs={12}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-between">
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </Card.Title>
              <Card.Subtitle className="s-title">New clients</Card.Subtitle>
              <Card.Text className="p-3">
                <Row>
                  <Col className="count">54</Col>
                  <Col><span className="badge badge-success" style={{color:"#058935",fontSize:".6rem"}}>+18.2%</span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-between">
                  <div className=""></div>
                  <div className="ps-5"></div>
                </div>
              </Card.Title>
              <Card.Subtitle className="s-title">
                Invoices overdue
              </Card.Subtitle>
              <Card.Text className="p-3">
                <Row>
                  <Col className="count ">6</Col>
                  <Col><span className="badge badge-error" style={{color:"#EE6163",fontSize:".6rem"}}>+2.7%</span></Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9} sm={12} xs={12}>
         <ChartContent/>
        </Col>
      </Row>
    
    </>
  );
}

export default SecondRow;
