import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "../../../../../Assets/images/avatar.jpg";
import "./PatientListTopLeft.css";

const PatientListTopLeft = ({ patientDetails }) => {
  return (
    <Container fluid className="p-0">
      <Row className="g-2">
        <Col md={4}>
          <div className="p-0 patient-profile">
            <div>
              <img className="avatar" src={Avatar} alt="" />
            </div>
            <h5 className="patient-name">{patientDetails?.name}</h5>
            <p className="patient-email">diane.cooper@example.com</p>
            <div className="patient-body">
              <h5 className="patient-visit">
                {patientDetails?.Past}
                <small>Past</small>
              </h5>
              <div className="divider"></div>
              <h5 className="patient-visit">
                {patientDetails?.Upcoming}
                <small>Upcoming</small>
              </h5>
            </div>
            <button className="message-btn">Send Message</button>
          </div>
        </Col>
        <Col md={8}>
          <div className="patient-details">
            <Container>
              <Row className="gy-4">
                <Col md={4}>
                  <div className="patient-data">
                    <p className="data-title">Gander</p>
                    <p className="data-value">{patientDetails?.Gender}</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="patient-data">
                    <p className="data-title">Birthday</p>
                    <p className="data-value">{patientDetails?.Birthday}</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="patient-data">
                    <p className="data-title">Phone Number</p>
                    {/* CAN'T USE PHONE NUMBER DATA */}
                    <p className="data-value">(239) 555-018</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="patient-data">
                    <p className="data-title">Street Address</p>
                    {/* CAN'T USE STREET ADDRESS DATA */}
                    <p className="data-value">Jl. Diponegoro No. 21</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="patient-data">
                    <p className="data-title">City</p>
                    {/* CAN'T FIND CITY DATA */}
                    <p className="data-value">Cilacap</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="patient-data">
                    <p className="data-title">ZIP Code</p>
                    {/* CAN'T USE ZIP CODE DATA */}
                    <p className="data-value">655849</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="patient-data">
                    <p className="data-title">Member Status</p>
                    {/* CAN'T USE MEMBER STATUS DATA */}
                    <p className="data-value"> Active Member</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="patient-data">
                    <p className="data-title">Registered Date</p>
                    {/* CAN'T USE REGISTERED DATE DATA */}
                    <p className="data-value">Feb 24th, 1997</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientListTopLeft;
