import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated, user} = useAuth0();
  return isAuthenticated &&  (
    <>
        <p className="pr-2 m-2">{user.name}</p>
        <button type="button" class="btn btn-secondary" onClick={() => logout()}>
        Log Out
        </button>
    </> 
    
  );
};

export default LogoutButton;
