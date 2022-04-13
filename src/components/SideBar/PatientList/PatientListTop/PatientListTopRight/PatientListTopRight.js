import React from "react";
import { BsPerson } from "react-icons/bs";
import "./PatientListTopRight.css";

const PatientListTopRight = () => {
  return (
    <div className="patient-list-top-right">
      <div className="notes-header">
        <h6 className="notes-header-title">Notes</h6>
        <p className="see-all-btn">See all</p>
      </div>
      <div className="notes-body">
        <p className="note">- This patient is lorem ipsum dolor sit amet</p>
        <p className="note">- Lorem ipsum dolor sit amet</p>
        <p className="note">- has allergic history with cataflam</p>
        <button className="save-note-btn">Save note</button>
      </div>
      <div className="notes-footer">
        <p className="notes-footer-title">Lorem ipsum dolor sit amet</p>
        <div className="notes-footer-bottom">
          <span>
            <BsPerson className="notes-footer-avatar" />
            Drg. Mega Nanade
          </span>
          <span>20 Nov 19</span>
        </div>
      </div>
    </div>
  );
};

export default PatientListTopRight;
