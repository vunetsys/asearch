import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="page-footer bg font-small pt-4">
      <div className="footer-copyright bg text-center py-3">
        © 2020 Copyright:
        <Link to="/" className="main-navigation__title logo">asearch</Link>
      </div>
    </footer>
  );
}

export default Footer;
