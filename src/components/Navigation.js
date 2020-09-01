import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Logo from "../assets/logo.png";


const Navigation = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm">
        <h1>
          <img className="" src={Logo} alt="Logo" width="40" height="40" />
          <h2 className="main-navigation__title logo">asearch admin</h2>
        </h1>
        </div>
        <div class="col-sm" />
        <div class="col-sm">
          <div class=" pt-3 d-flex justify-content-end">
            <LoginButton className="p-2" />
            <LogoutButton className="p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
