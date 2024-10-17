import "./consultation.css";

export default function Consultation({ onContactClick }) {
  return (
    <div className="ConsultationSection">
      <img
        src=".\src\assets\reviews\reviews-bgl.webp"
        alt="bg"
        className="consulation-bg"
      />
      <img
        src=".\src\assets\consultation\DirectionToConsultation.webp"
        alt="img"
        className="arrowLocation"
      />
      <div className="consult-head-combine">
        <p className="heading-main-styling">get a free nutritionist</p>
        <p className="heading-main-styling">consultation today</p>
      </div>
      <img
        src=".\src\assets\consultation\Appointment-booking.webp"
        alt="img"
        className="apointmentImg"
      />
      <img
        src=".\src\assets\consultation\Booking-decor.webp"
        alt="img"
        className="apointmentImgDecor"
      />
      <img
        src=".\src\assets\consultation\Booking-decor2.webp"
        alt="img"
        className="apointmentImgDecor2"
      />
      {/* <a href="#Contact"> */}
        <button onClick={onContactClick} className="BookNowButton">book now</button>
      {/* </a> */}
      <p className="heading-main-2-styling">how it works</p>
      <div className="HiW-section-illustration-wrapper">
        <div className="illustration-imgText-wrapper">
          <img
            src=".\src\assets\consultation\illustration1.webp"
            alt="illustration img"
          />
          <p className="how-it-works-section-text">Customize Your Meals</p>
        </div>
        <div className="illustration-imgText-wrapper">
          <img
            src=".\src\assets\consultation\illustration2.webp"
            alt="illustration img"
          />
          <p className="how-it-works-section-text">Personal Nutritionist</p>
        </div>
        <div className="illustration-imgText-wrapper">
          <img
            src=".\src\assets\consultation\illustration3.webp"
            alt="illustration img"
          />
          <p className="how-it-works-section-text">Free Delivery at Gym</p>
        </div>
        <div className="illustration-imgText-wrapper">
          <img
            src=".\src\assets\consultation\illustration4.webp"
            alt="illustration img"
          />
          <p className="how-it-works-section-text">
            Stop your subscription at any time
          </p>
        </div>
      </div>
    </div>
  );
}
