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
    <>
      <div className="Footer">
        <div className="footer-img">
          <div className="img-box">
            <img src={imgTop} alt="" />
            <div className="section-inner">
              <span className="btm para">
                Buy a home near <br /> parks & green spaces
              </span>
              <BigButton />
            </div>
          </div>
        </div>
        <div className="footer-inner">
          <div className="section-inner">
            <div className="left">
              <div className="appLogo">
                <img src={MainContent.appLogo} alt="" />
              </div>
              <p className="para">{MainContent.appDesc}</p>
              <div className="about">
                <div className="left">
                  <span>More about us</span>
                  <div className="social">
                    <Link>
                      <MdOutlineFacebook />
                    </Link>
                    <Link>
                      <RiInstagramLine />
                    </Link>
                    <Link>
                      <FaTelegramPlane />
                    </Link>
                  </div>
                </div>
                <p className="para copyright">
                  © 2024 — CopyrightAll Rights reserved
                </p>
              </div>
            </div>
            <div className="right">
              <ul className="links">
                <li>
                  <Link className="para">About.</Link>
                </li>
                <li>
                  <Link className="para">Testimonials.</Link>
                </li>
                <li>
                  <Link className="para">Pricing.</Link>
                </li>
                <li>
                  <Link className="para">Contacts.</Link>
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
    </>
  );
};

export default Footer;
