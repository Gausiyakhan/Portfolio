import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src="" alt="" /> */}
          <p>I am a frontend developer </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            {/* <img src="" alt="" /> */}
            <input type="email" placeholder="Enter Your Email " />
          </div>
          <div className="footer-subscribe">Enter</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          0 2023 Alex Bennit. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services </p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
