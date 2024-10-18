import './reviews.css';
import './plans.css';
export default function Reviews() {
  return (
    <div className="review-section" id="Reviews">
      <img
        src=".\src\assets\reviews\reviews-bgl.webp"
        alt="Review bg"
        className="review-bgl"
      />
      <img
        src=".\src\assets\reviews\reviews-bgr.webp"
        alt="Review bg"
        className="review-bgr"
      />
      <p className="fp-heading-style">fresh reviews</p>
      <img
        src=".\src\assets\reviews\fr-heading-decor1.webp"
        alt="Just Decor"
        className="fr-ul-decor1"
      />
      <img
        src=".\src\assets\reviews\fr-heading-decor2.webp"
        alt="Just Decor"
        className="fr-ul-decor2"
      />
      <img
        src=".\src\assets\reviews\reviews-persons.webp"
        alt="bg"
        className="reviews-cp"
      />
      <div className="reviews-main-container">
        <div className="review-box R1">
          <img
            src=".\src\assets\reviews\CP1.webp"
            alt="profile pic"
            className="commentor-img"
          />
          <div className="commenter-info">
            <div>
              <div className="rating">
                <p className="c-name">Rajesh K.</p>
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarnone.webp" alt="Star" />
                <p className="c-emoji">😎</p>
              </div>
              <p className="c-designation">Entrepreneur</p>
            </div>
            <p className="comment-heading">
              A healthy habit that actually sticks!
            </p>
            <p className="comment">
              I never thought I could enjoy eating healthy so much! JustDiet’s
              variety keeps things exciting, and I’ve never felt better. It’s
              now part of my daily routine.
            </p>
            <p className="comment-date">2021.03.02</p>
          </div>
        </div>

        <div className="review-box R2">
          <img
            src=".\src\assets\reviews\CP3.webp"
            alt="profile pic"
            className="commentor-img"
          />
          <div className="commenter-info">
            <div>
              <div className="rating">
                <p className="c-name">Vikram S.</p>
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarnone.webp" alt="Star" />
                <p className="c-emoji">🤩</p>
              </div>
              <p className="c-designation">Personal Trainer</p>
            </div>
            <p className="comment-heading">
              A perfect balance of taste and health!
            </p>
            <p className="comment">
              As a fitness enthusiast, I’ve tried many meal services, but
              JustDiet offers the perfect blend of flavor and nutrition. The
              chicken salad is my favorite!
            </p>
            <p className="comment-date">2021.03.02</p>
          </div>
        </div>

        <div className="review-box R3">
          <img
            src=".\src\assets\reviews\CP4.webp"
            alt="profile pic"
            className="commentor-img"
          />
          <div className="commenter-info">
            <div>
              <div className="rating">
                <p className="c-name">Radhika M.</p>
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <p className="c-emoji">😍</p>
              </div>
              <p className="c-designation">Software Engineer</p>
            </div>
            <p className="comment-heading">
              JustDiet makes eating healthy so easy!
            </p>
            <p className="comment">
              I used to struggle with meal prep, but JustDiet's fresh salads
              delivered right to my door have made my life so much simpler. The
              variety and quality are top-notch!{' '}
            </p>
            <p className="comment-date">2021.03.02</p>
          </div>
        </div>

        <div className="review-box R4">
          <img
            src=".\src\assets\reviews\CP5.webp"
            alt="profile pic"
            className="commentor-img"
          />
          <div className="commenter-info">
            <div>
              <div className="rating">
                <p className="c-name">Anjali T.</p>
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarnone.webp" alt="Star" />
                <p className="c-emoji">🤩</p>
              </div>
              <p className="c-designation">Nutritionist</p>
            </div>
            <p className="comment-heading">
              A per fect balance of taste and health!
            </p>
            <p className="comment">
              I never thought I could enjoy eating healthy so much! JustDiet’s
              variety keeps things exciting, and I’ve never felt better. It’s
              now part of my daily routine.
            </p>
            <p className="comment-date">2021.03.02</p>
          </div>
        </div>

        <div className="review-box R5">
          <img
            src=".\src\assets\reviews\CP7.webp"
            alt="profile pic"
            className="commentor-img"
          />
          <div className="commenter-info">
            <div>
              <div className="rating">
                <p className="c-name">Rahul G.</p>
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <img src=".\src\assets\reviews\rstarfull.webp" alt="Star" />
                <p className="c-emoji">😇</p>
              </div>
              <p className="c-designation">Photographer</p>
            </div>
            <p className="comment-heading">
              A perfect balance of taste and health!
            </p>
            <p className="comment">
              As a fitness enthusiast, I’ve tried many meal services, but
              JustDiet offers the perfect blend of flavor and nutrition. The
              chicken salad is my favorite!
            </p>
            <p className="comment-date">2021.03.02</p>
          </div>
        </div>
      </div>
    </div>
  );
}
