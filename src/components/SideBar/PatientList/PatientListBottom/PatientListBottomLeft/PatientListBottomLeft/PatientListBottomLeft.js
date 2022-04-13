import React from "react";
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import PastAppointments from "../PastAppointments/PastAppointments";
import MedicalRecords from "../MedicalRecords/MedicalRecords";
import "./PatientListBottomLeft.css";

const PatientListBottomLeft = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="patient-list-bottom-left">
      <div className="patient-list-bottom-left-header">
        <NavLink
          exact
          to={`${url}`}
          activeClassName="patient-bottom-menu-selected"
        >
          <button className="patient-list-bottom-left-header-btn">
            Upcoming Appointments
          </button>
        </NavLink>
        <NavLink
          exact
          to={`${url}/pastAppointments`}
          activeClassName="patient-bottom-menu-selected"
        >
          <button className="patient-list-bottom-left-header-btn">
            Past Appointments
          </button>
        </NavLink>
        <NavLink
          exact
          to={`${url}/medicalRecords`}
          activeClassName="patient-bottom-menu-selected"
        >
          <button className="patient-list-bottom-left-header-btn">
            Medical Record
          </button>
        </NavLink>
      </div>

      <Switch>
        <Route exact path={path}>
          <UpcomingAppointments />
        </Route>
        <Route exact path={`${path}/pastAppointments`}>
          <PastAppointments />
        </Route>
        <Route exact path={`${path}/medicalRecords`}>
          <MedicalRecords />
        </Route>
      </Switch>
    </div>
  );
};

export default PatientListBottomLeft;
