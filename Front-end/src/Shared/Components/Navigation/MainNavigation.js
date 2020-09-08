import React from "react";
import "./MainNavigation.css";
import "../../Typography/typography.css";
import Header from "./Header.js";
import NavLinks from "./NavLinks.js";
import Logo from "../../../assets/images/logo/Greek_monster_mythology_6-512.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const MainNavigation = () => {
  return (
    <>
      <Header>
        <Fade left>
          <h1>
            <img className="p-0" src={Logo} alt="Logo" width="50" height="50" />
            <Link to="/" className="main-navigation__title logo">
              asearch
            </Link>
          </h1>
        </Fade>
        <nav>
          <Fade right>
            <NavLinks />
          </Fade>
        </nav>
      </Header>
    </>
  );
};

export default MainNavigation;
