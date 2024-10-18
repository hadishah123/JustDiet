import './plans.css';

export default function Plans() {
  return (
    <div className="plans-section" id="Plans">
      <img
        src="\assets\plans\plans-bgl.webp"
        alt="bg"
        className="plans-bgl"
      />
      <img
        src="\assets\plans\plans-bgr.webp"
        alt="bg"
        className="plans-bgr"
      />
      <p className="fp-heading-style">fresh plans</p>
      <img
        src="\assets\plans\fpDecor1.webp"
        alt="Just Decor"
        className="fp-decor-left"
      />
      <img
        src="\assets\plans\fpDecor2.webp"
        alt="Just Decor"
        className="fp-decor-right"
      />
      <img
        src="\assets\plans\heading-ul-decor.webp"
        alt="Just Decor"
        className="fp-ul-style"
      />
      <img
        src="\assets\plans\toBottom.webp"
        alt="Just Decor"
        className="fp-icon"
      />
      <div className="Plans-image-container">
        {/* <img src="\assets\plans-membership.webp" alt="membership" className="Plans-image" /> */}
        <div className="planInfo">
          <img
            src="/assets/plans/mplan1.webp"
            alt="membership plan "
            className="mplan-img1"
          />
          <p className="plans-info-para">
            daily gym delivery, offering 35g of protein and a balanced profile.
          </p>
        </div>
        <div className="planInfo-2">
          <img
            src="/assets/plans/mplan2.webp"
            alt="membership plan "
            className="mplan-img2"
          />
          <p className="plans-info-para">
            daily gym delivery, offering 35g of protein and a balanced profile.
          </p>
        </div>
        <div className="planInfo">
          <img
            src="/assets/plans/mplan3.webp"
            alt="membership plan "
            className="mplan-img3"
          />
          <p className="plans-info-para">
            daily gym delivery, offering 35g of protein and a balanced profile.
          </p>
        </div>
      </div>
    </div>
  );
}
