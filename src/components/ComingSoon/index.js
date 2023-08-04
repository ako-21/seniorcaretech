import React from "react";
// import { useNavigate } from "react-router-dom";
import construction from "../../assets/images/construction.png";

export default function FourZeroFour() {
  // const navigate = useNavigate();
  return (
    <section className="error-page text-center">
      <div className="container">
        <div className="error-content">
          <img src={construction} alt="construction" />
          <h2>This page is under construction.</h2>
          <p>
            Welcome to SeniorCareTech, your all-in-one technology partner for nursing homes, assisted living facilities, and specialized senior care institutions. Our comprehensive services encompass networking and wifi solutions, top-notch cyber security, endpoint management and protection, app management and licensing, mobile device management, efficient hardware management, reliable telecommunications, and more. Mark your calendars for the big launch on 09/01/2023. We are excited to earn your business and revolutionize the way you approach senior care with integrated technology solutions. Stay tuned for our fully-functional website coming soon!
          </p>
          {/* <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="theme-btn mt-30"
          >
            go back
          </a> */}
        </div>
      </div>
    </section>
  );
}
