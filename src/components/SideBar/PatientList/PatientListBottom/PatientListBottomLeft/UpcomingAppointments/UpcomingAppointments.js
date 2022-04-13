import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdOutlineStickyNote2 } from "react-icons/md";
import "./UpcomingAppointments.css";

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
      .then((res) => res.json())
      .then((data) => setAppointments(data[0]));
  }, []);

  console.log(appointments);

  // UNABLE TO USE THE APPOINTMENTS DATA DUO TO "Upcoming Appointments" THIS NAMING CONVERSION.

  return (
    <div className="appointments-div">
      <div className="upcoming-appointments">
        <div className="upcoming-appointments-header">
          <h6 className="upcoming-appointments-header-title">
            Root Canal Treatment
          </h6>
          <div className="upcoming-appointments-header-select">
            <MdKeyboardArrowUp className="select-icon" />
            <h6 className="upcoming-appointments-header-select-title">
              Show Previous Treatments
            </h6>
          </div>
        </div>
        <div className="upcoming-appointments-body">
          <div className="elements"></div>
          <div className="appointments-details-container">
            <div className="appointments-details">
              <div className="elements-circle"></div>
              <div>
                <h5 className="appointment-date">26 Nov'19</h5>
                <p className="appointment-time">09.00-10.00</p>
              </div>
              <div className="appointment-divider"></div>
              <div>
                <p className="appointment-treatment">Treatment</p>
                <h6 className="appointment-treatment-status">Open Access</h6>
              </div>
              <div className="appointment-divider"></div>
              <div>
                <p className="appointment-treatment">Dentist</p>
                <h6 className="appointment-dentist">Drg. Adam H.</h6>
              </div>
              <div>
                <p className="appointment-treatment">Nurse</p>
                <h6 className="appointment-nurse">Jessicamila</h6>
              </div>
              <div className="appointment-note">
                <MdOutlineStickyNote2 className="note-icon" />
                <h6 className="appointment-note">Note</h6>
              </div>
            </div>
            <div className="appointments-details">
              <div className="elements-circle"></div>
              <div>
                <h5 className="appointment-date">26 Nov'19</h5>
                <p className="appointment-time">09.00-10.00</p>
              </div>
              <div className="appointment-divider"></div>
              <div>
                <p className="appointment-treatment">Treatment</p>
                <h6 className="appointment-treatment-status">Open Access</h6>
              </div>
              <div className="appointment-divider"></div>
              <div>
                <p className="appointment-treatment">Dentist</p>
                <h6 className="appointment-dentist">Drg. Adam H.</h6>
              </div>
              <div>
                <p className="appointment-treatment">Nurse</p>
                <h6 className="appointment-nurse">Jessicamila</h6>
              </div>
              <div className="appointment-note">
                <MdOutlineStickyNote2 className="note-icon" />
                <h6 className="appointment-note">Note</h6>
              </div>
            </div>
            <div className="appointments-details">
              <div className="elements-circle"></div>
              <div>
                <h5 className="appointment-date">26 Nov'19</h5>
                <p className="appointment-time">09.00-10.00</p>
              </div>
              <div className="appointment-divider"></div>
              <div>
                <p className="appointment-treatment">Treatment</p>
                <h6 className="appointment-treatment-status">Open Access</h6>
              </div>
              <div className="appointment-divider"></div>
              <div>
                <p className="appointment-treatment">Dentist</p>
                <h6 className="appointment-dentist">Drg. Adam H.</h6>
              </div>
              <div>
                <p className="appointment-treatment">Nurse</p>
                <h6 className="appointment-nurse">Jessicamila</h6>
              </div>
              <div className="appointment-note">
                <MdOutlineStickyNote2 className="note-icon" />
                <h6 className="appointment-note">Note</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
