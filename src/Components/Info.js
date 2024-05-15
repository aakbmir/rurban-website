import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          Our focus is to reduce and potentially eliminate the substantial
          contrast in health-care services that exists between rural and
          urban-based healthcare. We adopt and strive to create a multi-faceted
          approach to this issue, and hope for an impact that establishes
          equality in healthcare for all.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Comprehensive Appointment Management"
          description="
          We facilitate the scheduling of daily appointments for patients, ensuring efficient time management for both staff and patients"
          // It displays comprehensive patient information, enhancing the overall patient experience and aiding healthcare providers in delivering personalized care"
          icon="appointment.png"
        />

        <InformationCard
          title="Efficient Registration Process"
          description="We streamline the registration process with features such as easy conversion of appointments to registrations and walk-in registration capabilities ensureing accuracy and efficiency in patient data management."
          icon="REG.png"
        />

        <InformationCard
          title="Cutting Edge Technology"
          description="We utilize cutting edge software tools to provide patients the
          opportunity to schedule appointments, communicate with their providers
          at a 24/7 basis, and more"
          icon="insurance.png"
        />
      </div>
    </div>
  );
}

export default Info;
