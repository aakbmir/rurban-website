import React from "react";
import "../Styles/Footer.css";
import Contact from "./Contact";

function Footer() {
  return (
    <div className="footer-section" id="contact">
      <div className="footer-container">
        <div className="ft-info">
          <Contact />
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024-2025 Rurban. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
