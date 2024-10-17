import "./footer.css";
import SocialMediaIcons from "./icons";

export default function Footer({ onContactClick }) {
  return (
    <div className="footer">
      <div className="footer-top-section">
        <p className="footer-heading">
          Our 6 days Just Diet plan is only ₹399!
        </p>
        <p className="footer-text">
          Get personalized, nutrient-packed meals delivered to your gym to keep
          you on track with your fitness goals.
        </p>
        <button onClick={onContactClick} className="subscribe-now">Subscribe now</button>
        <img
          src=".\src\assets\footer\footer-bowl.webp"
          alt="Diet Bowl"
          className="footer-bowl"
        />
      </div>

      <div className="footer-nav-section">
        <div className="footer-nav">
          <div className="footer-brand-name-styling">
            <img
              src=".\src\assets\justDiet.png"
              alt=""
              className="brand-favicon footer-styling-logo"
            />
            <img
              src=".\src\assets\JustDiet-text.webp"
              alt=""
              className="brand-text"
            />
            <img
              src=".\src\assets\footer\tr-arrow.webp"
              alt="TR-arrow"
              className="footer-tr-arrow"
            />
          </div>
          <ul className="footer-nav-list">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Salads">Our Salad</a>
            </li>
            <li>
              <a href="#Plans">Fresh Plans</a>
            </li>
            <li>
              <a href="#Reviews">Fresh Reviews</a>
            </li>
            <li>
              <a href="#BMI">Calculate Your BMI</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
            <li>
              <button onClick={onContactClick} className="footer-contact-btn">
                Contact Us
              </button>
            </li>
          </ul>
          <a href="#Home">
            <img
              src=".\src\assets\footer\to-top.webp"
              alt="to-top"
              className="top-btn"
            />
          </a>
        </div>

        <div className="footer-contactInfo" id="Contact">
          <p className="yellow-font">Contact Us</p>
          <a
            className="footer-small-text mb"
            href="tel:+91 8055566602"
            target="_blank"
          >
            91+ 89198 91191
          </a>
          <p className="yellow-font">Location</p>
          <p className="footer-small-text">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
          <p className="yellow-font">Mo—Fr</p>
          <p className="footer-small-text">9am—6pm</p>
          <p className="yellow-font">Email</p>
          <a
            href="mailto:hello@JustDiet.com"
            target="_blank"
            className="footer-small-text mb"
          >
            hello@JustDiet.Pro
          </a>
          <div className="social-icons">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
      <p className="footer-copyright">&copy;2024 - Copyright</p>
    </div>
  );
}
