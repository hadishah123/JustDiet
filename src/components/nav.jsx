import './nav.css';
// import Slider from './slider';

export default function Navbar({ onContactClick }) {
  // Accept the prop
  return (
    <div className="heroSection" id="Home">
      <nav className="row">
        <div className="navbar-nav-brand col-2">
          <img
            src="\assets\justDiet.png"
            alt="Just Diet Logo"
            className="brand-favicon"
          />
          <a href="#" className="nav-link">
            <img
              src="\assets\JustDiet-text.webp"
              alt="Brand"
              className="brand-text"
            />
          </a>
        </div>
        <div className="nav-list-top col-7">
          <ul className="navbar-nav ">
            <li>
              <a className="nav-link" href="#Salads">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Plans">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Salads">
                Categories
              </a>
            </li>
          </ul>
        </div>
        <div className="brand-name col">
          <button
            type="button"
            className="btn btn-light"
            onClick={onContactClick}
          >
            {' '}
            {/* Call the prop function */}
            Contact Us
          </button>
        </div>
      </nav>z
      <img src="\assets\hero.webp" alt="hero" className="hero-image" />
      {/* <Slider /> */}
      <img
        src="\assets\heroBowl.webp"
        alt="hero bowl"
        className="hero-bowl-image"
      />
    </div>
  );
}
