/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

export default function Button({ buttonPlaceholder }) {
  const InputButton = styled.button`
    @media (max-width: 768px) {
      background-color: red;
    }
    width: 24vw;
    height: 7vh;
    border-radius: 50px;
    border: 1px solid #3498db;
    background: #2980b9;
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    margin-bottom: 3vh;
    &:hover {
      background-color: #3ea2e6;
      border: none;
    }
  `;
  const ButtonText = styled.p`
    color: #f5f5f5;
    font-family: Raleway;
    font-size: 2vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  `;
  return (
    <InputButton>
      <ButtonText>{buttonPlaceholder}</ButtonText>
    </InputButton>
  );
}
