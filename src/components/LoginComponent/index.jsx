import React, { useContext, useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AuthContext } from '../../providers/auth';

const clientId = "284036896748-md8b284t36cfe91t6ib2rufbbbh96hdu.apps.googleusercontent.com";

function Login({ credentials, setCredentials }) {

  const [showloginButton, setShowloginButton] = useState(true);

  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);

    sessionStorage.setItem('email', res.profileObj.email);
    sessionStorage.setItem('familyName', res.profileObj.familyName);
    sessionStorage.setItem('givenName', res.profileObj.givenName);
    sessionStorage.setItem('googleId', res.profileObj.googleId);
    sessionStorage.setItem('imageUrl', res.profileObj.imageUrl);
    sessionStorage.setItem('name', res.profileObj.name);    

    setShowloginButton(false);
    setShowlogoutButton(true);


  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();

    sessionStorage.setItem('email', '');
    sessionStorage.setItem('familyName', '');
    sessionStorage.setItem('givenName', '');
    sessionStorage.setItem('googleId', '');
    sessionStorage.setItem('imageUrl', '');
    sessionStorage.setItem('name', '');

    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      { showloginButton ?
        <GoogleLogin
          clientId={clientId}
          buttonText="Entre com sua conta Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        /> : null}

      { showlogoutButton ?
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        >
        </GoogleLogout> : null
      }
    </div>
  );
}
export default Login;