import React from "react";
import { AiOutlineFileAdd, AiOutlineFileText } from "react-icons/ai";
import "./PatientListBottomRight.css";

const PatientListBottomRight = () => {
  return (
    <div className="patient-list-bottom-right">
      <div className="patient-list-bottom-right-header">
        <h6 className="patient-list-bottom-right-title">Flies / Documents</h6>
        <button className="add-file-btn">
          <AiOutlineFileAdd className="add-file-icon" />
          Add Flies
        </button>
      </div>
      <div className="patient-list-bottom-right-body">
        <div className="file-detail">
          <div>
            <AiOutlineFileText className="file-icon" />
            <h6>Check Up Result.pdf</h6>
          </div>
          <h6 className="file-size">128kb</h6>
        </div>
        <div className="file-detail">
          <div>
            <AiOutlineFileText className="file-icon" />
            <h6>Check Up Result.pdf</h6>
          </div>
          <h6 className="file-size">128kb</h6>
        </div>
        <div className="file-detail">
          <div>
            <AiOutlineFileText className="file-icon" />
            <h6>Check Up Result.pdf</h6>
          </div>
          <h6 className="file-size">128kb</h6>
        </div>
        <div className="file-detail">
          <div>
            <AiOutlineFileText className="file-icon" />
            <h6>Check Up Result.pdf</h6>
          </div>
          <h6 className="file-size">128kb</h6>
        </div>
      </div>
    </div>
  );
};

export default PatientListBottomRight;
