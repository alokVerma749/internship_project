import './App.css';

function App() {
  async function handleLogin() {
    await window.FB.login();
    const status = await window.FB.getLoginStatus()
    console.log(status, '###')
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
