import React from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p>Designed and Developed By</p>
      <hr />
      <p>Agon Msini</p>
      <div>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "15px",
          }}
          href="https://www.instagram.com/a_misini/"
        >
          <FaInstagram size={25} />
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "15px",
          }}
          href="https://www.facebook.com/agonmisini19/"
        >
          <FaFacebook size={25} />
        </a>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://github.com/Agon21Misini"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
