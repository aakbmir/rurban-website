import Points from "./Points";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img
          src="https://i.pinimg.com/736x/c6/7c/c1/c67cc114fc289a3eacc442da873053b2.jpg"
          alt="Doctor Group"
          className="about-image1"
        />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          We work with hospitals to simplify ER Operations by providing
          real-time updates on patient statuses and bed availablitiy. We allow
          for greater efficiency in ER-related services that better serve the ER
          and the patient. We are constantly expanding our services in a field
          with significant potential.
        </p>
        <h4 className="about-text-title">Our Solutions</h4>
        <Points
          title="Bridging the Healthcare Divide"
          description="We strive to reduce and potentially eliminate the substantial contrast in health-care services between rural and urban-based healthcare."
        />
        <Points
          title="Healthcare Equality for All"
          description="Our vision is to establish equality in healthcare services, regardless of geographic location or socioeconomic status."
        />
        <Points
          title="Empowering Patients and Hospitals"
          description="Our platform empowers patients to easily access healthcare services and hospitals to efficiently manage patient care."
        />
        <Points
          title="Community Impact"
          description="By bridging the gap between rural and urban healthcare, we aim to positively impact communities by improving overall health outcomes."
        />
        {/* <Points
          title="Enhanced Hospital Preparedness: Anticipating Your Arrival"
          description="Empowers hospitals to anticipate your arrival by providing them with insight into your check-in status, ensuring they are well-prepared to address your needs upon your arrival."
        /> */}
      </div>
    </div>
  );
}

export default About;
