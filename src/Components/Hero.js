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
          <span className="text-headline">Rurban {"   "} </span>
          <span className="text-title"> ER Access Simplified</span>
          <p className="text-descritpion">
            At Rurban, we understand the importance of equitable and accessible
            healthcare to all. That's why we have created a simple easy-to-use
            platform that allows patients to readily receive efficient
            healthcare and various medical services from the comfort of their
            own home
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
