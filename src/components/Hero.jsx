import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="logo">Coolax</div>
        <div className="welcome-text">
          <h1>Coolax</h1>
          <p>
            Get endless entertainment, live sports, and the shows <br /> and
            movies you love.
          </p>
          <div className="media-links">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
            <a href="https://twitter.com/deejayronnieXL" target="_blank">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/deejayronnie_xl/"
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
          </div>
          <button>Get In Touch</button>
        </div>
        <div className="slanted-images"></div>
      </div>
    </div>
  );
};

export default Hero;
