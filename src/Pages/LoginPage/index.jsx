/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/auth.context";
import authService from "../../Services/auth.service";

import InputButton from "../../Components/Button";
import InputBox from "../../Components/InputBox/index";
import Logo from "../../Components/Logo";

const LoginContainer = styled.div`
  @media (max-width: 768px) {
    width: auto;
    height: auto;
    margin-top: -12vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28vw;
  height: 65vh;
  border-radius: 50px;
  border: 1px solid #85c1e9;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.28) -31.25%,
    rgba(255, 255, 255, 0.02) 100%
  );
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
`;

const ErrorMessage = styled.p`
  @media (max-width: 768px) {
    margin: -1vh 0 1.5vh 1vh !important;
    font-size: 2vh;
  }
  margin: -1vh 0 1.5vh 1vh !important;
  color: #ce2029;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [loginIn, setLoginIn] = useState(false);

  const navigate = useNavigate();

  const { storeToken, authenticateUsername } = useContext(AuthContext);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginIn(true);

    const requestBody = { username, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUsername();
        setLoginIn(false);
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response;
        setErrorMessage(errorDescription);
      });
  };
  return (
    <LoginContainer>
      <Logo />
      <Form>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>
              <InputBox
                id="username"
                inputType="text"
                inputName="username"
                placeholderText="Whom may I address?"
                value={username}
                handleFunction={handleUsername}
              />
            </label>
          </div>
          <div>
            <label>
              <InputBox
                id="password"
                inputType="password"
                inputName="password"
                placeholderText="Magical Words"
                value={password}
                handleFunction={handlePassword}
              />
            </label>
          </div>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}{" "}
          <InputButton buttonPlaceholder="Login" type="button" />
        </form>
      </Form>
    </LoginContainer>
  );
}
