import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <pan className="loginTitle">Login</pan>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="Enter your email..."></input>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..."></input>
        <button className="loginButton">Login</button>
      </form>
      <Link to={"/register"} className="link">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}

export default Login;
