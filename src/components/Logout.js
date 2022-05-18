import React from "react";
import { OAUTH_CLIENT_ID } from "../constants/global";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch({ type: "set_auth", payload: false });
    console.log("Logout Success");
  };

  return (
    <div>
      <GoogleLogout
        clientId={OAUTH_CLIENT_ID}
        onLogoutSuccess={onSuccess}
        buttonText="Logout"
      />
    </div>
  );
}

export default Logout;
