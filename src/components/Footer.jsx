import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h2>COOLAX</h2>
      <div className="text">
        <h3>Ready to get started?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="links">
        <a href="#">Terms And Conditions</a>
        <a href="#">Privacy Policy</a>
        <div className="media-links">
          <a href="#">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
          <a href="https://twitter.com/deejayronnieXL" target="_blank">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/deejayronnie_xl/" target="_blank">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        </div>
        <span>&copy;2022</span>
      </div>
    </div>
  );
};

export default Footer;
