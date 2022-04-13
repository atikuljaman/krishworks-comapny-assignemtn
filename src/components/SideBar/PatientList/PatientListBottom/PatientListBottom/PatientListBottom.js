import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PatientListBottomLeft from "../PatientListBottomLeft/PatientListBottomLeft/PatientListBottomLeft";
import PatientListBottomRight from "../PatientListBottomRight/PatientListBottomRight";
import "./PatientListBottom.css";

const PatientListBottom = () => {
  return (
    <div className="patient-list-bottom">
      <Container className="p-0" fluid>
        <Row className="gy-5">
          <Col md={8} className="p-0">
            <PatientListBottomLeft />
          </Col>
          <Col md={4} className="pe-0">
            <PatientListBottomRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PatientListBottom;
