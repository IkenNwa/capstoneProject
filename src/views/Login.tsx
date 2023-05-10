

function Login() {
  return (
    <div className="loginPage">
      <div className="logo">
        <img src="/Chatter2Logo2.svg" alt="Logo" />
        <p>Chatter</p>
      </div>
      <div className="loginContainer">
        <form className="formContainer">
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <div className="divider">
          <hr /> OR <hr />
        </div>
        <div className="otherLogin">
          <div className="item">Google</div>
          <div className="item">Facebook</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
