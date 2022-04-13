import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillPrinter } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import PatientListTop from "../PatientListTop/PatientListTop/PatientListTop";
import PatientListBottom from "../PatientListBottom/PatientListBottom/PatientListBottom";
import "./PatientList.css";

const PatientList = () => {
  const [patientDetails, setPatientDetails] = useState([]);

  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((res) => res.json())
      .then((data) => setPatientDetails(data[0]));
  }, []);

  return (
    <div className="patient-list-container">
      <div className="patient-list-header">
        <div className="patient-list-left">
          <span className="header-title">Patient List</span>
          <MdArrowForwardIos className="right-arrow-icon" />
          <span className="header-patient-name">{patientDetails?.name}</span>
        </div>
        <div className="patient-list-right">
          <button className="print-btn">
            <AiFillPrinter />
          </button>
          <button className="patient-edit-btn">
            <FaRegEdit className="edit-icon" />
            <span>Edit Patient</span>
          </button>
        </div>
      </div>
      <PatientListTop patientDetails={patientDetails} />
      <PatientListBottom />
    </div>
  );
};

export default PatientList;
