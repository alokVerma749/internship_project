import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = ({ onLogin }) => {
  const responseFacebook = (response) => {
    // Handle the response from Facebook login API
    console.log(response);
    if (response.accessToken) {
      // Send the token to your backend for further authentication and user management
      onLogin(response.accessToken);
    }
  };

  return (
    <FacebookLogin
      appId="YOUR_FACEBOOK_APP_ID"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      icon="fa-facebook"
      textButton="Login with Facebook"
    />
  );
};

export default FacebookLoginButton;
