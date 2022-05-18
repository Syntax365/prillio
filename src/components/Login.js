import React from "react";
import { OAUTH_CLIENT_ID } from "../constants/global";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch({ type: "set_auth", payload: true });
    dispatch({ type: "set_firstname", payload: res.profileObj.givenName });
    dispatch({ type: "set_lastname", payload: res.profileObj.familyName });
  };

  const onFailure = (res) => {
    console.log("Login Failure : ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={OAUTH_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        buttonText="Login"
      />
    </div>
  );
}

export default Login;
