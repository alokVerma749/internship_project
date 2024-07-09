import { useEffect } from 'react';
import './App.css';

function App() {
  
  function handleLogin() {
    window.FB.login();
    const status = window.FB.getLoginStatus()
    console.log(status, '###')
  }

  return (
    <div>
      <h2>Login Page</h2>
      {/* <button onClick={handleLogin}>Login</button> */}
      <div class="fb-login-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="true" data-use-continue-as="true"></div>
    </div>
  );
}

export default App;
