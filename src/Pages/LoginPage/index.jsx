/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

import InputBox from "../../Components/InputBox/index";
import InputButton from "../../Components/Button";
import Logo from "../../Components/Logo";

const LoginContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LoginForm() {
  return (
    <LoginContainer>
      <Logo />
      <Form>
        <InputBox
          inputType="text"
          inputName="user"
          placeholderText="Whom may I address?"
        />
        <InputBox
          inputType="password"
          inputName="password"
          placeholderText="Magical Words"
        />
        <InputButton buttonPlaceholder="Login" />
      </Form>
    </LoginContainer>
  );
}
