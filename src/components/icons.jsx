import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./icons.css"

const SocialMediaIcons = () => {
    return (
        <div className='icons-wrapper'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
            </a>
            <a  href="https://wa.me/918919891191?text=Hello!%20I%20have%20a%20query%20about%20your%20services"
           target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
