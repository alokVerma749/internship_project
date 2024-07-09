import { useEffect } from 'react';
import './App.css';

function App() {
  
  function handleLogin() {
    window.FB.login();
    const status = window.FB.getLoginStatus()
    console.log(status, '###')
  }

  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '762762392464716',
        cookie     : true,
        xfbml      : true,
        version    : 'v20.0'
      });

      window.FB.AppEvents.logPageView();
    };

    // Load Facebook SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      <h2>Login Page</h2>
      {/* <button onClick={handleLogin}>Login</button> */}
      <div class="fb-login-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="true" data-use-continue-as="true"></div>
    </div>
  );
}

export default App;
