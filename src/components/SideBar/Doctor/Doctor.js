import React, { useEffect, useState } from "react";
import DoctorImg from "../../../Assets/images/doctor.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Doctor.css";

const Doctor = () => {
  const [doctorData, setDoctorData] = useState();

  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((res) => res.json())
      .then((data) => setDoctorData(data[0]));
  }, []);

  return (
    <div>
      <div className="doctor-container">
        <div className="doctor-details">
          <img className="doctor-img" src={DoctorImg} alt="" />
          <h6 className="doctor-name">
            {doctorData?.name}
            <br />
            <small className="designation">{doctorData?.specification}</small>
          </h6>
        </div>
        <MdKeyboardArrowDown className="down-arrow" />
      </div>
    </div>
  );
};

export default Doctor;
