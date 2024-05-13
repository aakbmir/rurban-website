import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      emailRegex.test(inputEmail)
        ? toast.success("Subscribed to Newsletter !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => {
              setIsButtonDisabled(true);
              setInputEmail("");
            },
            onClose: () => setIsButtonDisabled(false),
          })
        : toast.error("Invalid Email Address !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsButtonDisabled(true),
            onClose: () => setIsButtonDisabled(false),
          });
    }
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Contact Us</p>
      <input
        type="text"
        inputMode="Name"
        className="ft-input"
        placeholder="Enter your Name"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder="Enter a valid email address"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <textarea
        type="text"
        inputMode="email"
        className="ft-textarea"
        placeholder="Message"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      ></textarea>
      <p></p>
      <button
        className="text-appointment-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleBookAppointmentClick}
      >
        Submit
      </button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default Contact;