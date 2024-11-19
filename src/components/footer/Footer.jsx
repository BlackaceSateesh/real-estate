import { Link } from "react-router-dom";
import { MainContent } from "../../constants/mainContent";
import imgTop from "../../assets/footer/footerTop.png";
import BigButton from "../UI/BigButton";
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import "../../styles/global/Footer.css";

const Footer = () => {
  return (
    <div className="Footer" id="contact-us">
      {/* Image Section */}
      <div className="footer-img">
        <div className="img-box">
          <img src={imgTop} alt="Footer Background" />
          <div className="section-inner">
            <span className="btm para">
              Buy a home near <br /> parks & green spaces
            </span>
            <BigButton />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-inner">
        <div className="section-inner sm-flex-column">
          {/* Left Section: Logo, Description, Social Links */}
          <div className="left">
            <div className="appLogo">
              <img src={MainContent.appLogo} alt="App Logo" />
            </div>
            <p className="para">{MainContent.appDesc}</p>
            <div className="about">
              <div className="left">
                <span>More about us</span>
                <div className="social">
                  <Link to="#">
                    <MdOutlineFacebook />
                  </Link>
                  <Link to="#">
                    <RiInstagramLine />
                  </Link>
                  <Link to="#">
                    <FaTelegramPlane />
                  </Link>
                </div>
              </div>
              <p className="para copyright">
                © 2024 — Copyright All Rights Reserved
              </p>
            </div>
          </div>

          {/* Right Section: Links & Contact Info */}
          <div className="right">
            <ul className="links">
              <li>
                <a href="#project" className="para">
                  About.
                </a>
              </li>
              <li>
                <a href="#we-offer" className="para">
                  We offer.
                </a>
              </li>
              <li>
                <a href="#plan" className="para">
                  Pricing.
                </a>
              </li>
              <li>
                <a href="#contact-us" className="para">
                  Contacts.
                </a>
              </li>
            </ul>
            <div className="info">
              <div className="box1">
                <h1>Contact Us</h1>
                <p className="para">{MainContent.contactNo}</p>
                <p className="para">{MainContent.email}</p>
              </div>
              <div className="box1">
                <h1>Location</h1>
                <p className="para">{MainContent.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
