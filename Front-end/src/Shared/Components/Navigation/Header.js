import React from "react";
import "./MainHeader.css";


const Header = props => {
  return (
    <header className="main-header">{props.children}</header>
  );
};


export default Header;