import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Rurban</p>
          <h2 className="text-title">Er Access Simplified</h2>
          <p className="text-descritpion">
            Our focus is to reduce and potentially eliminate the substantial
            contrast in health-care services that exists between rural and
            urban-based healthcare. We adopt and strive to create a
            multi-faceted approach to this issue, and hope for an impact that
            establishes equality in healthcare for all.
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
          {/* <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div> */}
        </div>

        <div className="hero-image-section">
          <img
            className="hero-image1"
            src="https://premiermedicalclinic.org/wp-content/uploads/2022/03/beautiful-doctor-pointing-fingers.png"
            alt="Doctor"
          />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
