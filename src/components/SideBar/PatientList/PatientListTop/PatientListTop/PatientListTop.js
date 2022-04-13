import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PatientListTopLeft from "../PatientListTopLeft/PatientListTopLeft";
import PatientListTopRight from "../PatientListTopRight/PatientListTopRight";
import "./PatientListTop.css";

const PatientListTop = ({ patientDetails }) => {
  return (
    <div className="patient-list-top">
      <Container>
        <Row>
          <Col md={8}>
            <PatientListTopLeft patientDetails={patientDetails} />
          </Col>
          <Col md={4}>
            <PatientListTopRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PatientListTop;
