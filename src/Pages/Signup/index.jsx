import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../Services/auth.service";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  //handle change of inputs
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { username, password };

    authService
      .signup(requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        } else {
          setErrorMessage("An unknown error occurred. Please try again.");
        }
      });
  };
  

  return (
    <div className="signup-page">
      <div className="sign-up-form">
        <h1 className="signup-title">Sign Up</h1>

        <form onSubmit={handleSignupSubmit}>
          <div className="form-input">
            <label className="signup-label signup">username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="form-input">
            <label className="signup-label signup">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div>
            <button className="signup-btn" type="submit">
              Sign Up
            </button>
          </div>
        </form>

        <p className="login-route">
          Already have account?{" "}
          <Link className="login-route1" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
