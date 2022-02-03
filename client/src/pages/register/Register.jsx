import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <pan className="registerTitle">Register</pan>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username..."></input>
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        ></input>
        <button className="registerButton">Register</button>
      </form>
      <Link to={"/login"} className="link">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}

export default Register;
