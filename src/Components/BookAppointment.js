import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img
          src="https://thumbs.dreamstime.com/b/double-exposure-smart-medical-doctor-working-operating-room-as-concept-43619820.jpg"
          alt="Doctor Group"
          className="ba-image1"
        />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Rurban</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose Rurban for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#33528b" }} />{" "}
          Equitable Healthcare Access
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#33528b" }} />{" "}
          Convenience and Transparency
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#33528b" }} />{" "}
          Community Impact
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#33528b" }} />{" "}
          Enrollment Easy and Quick
        </p>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://rurban-fe.onrender.com/"
          className="text-appointment-btn"
          type="button"
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </a>
      </div>
    </div>
  );
}

export default BookAppointment;
