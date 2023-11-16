/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

export default function InputBox({ inputType, inputName, placeholderText }) {
  const FormInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24vw;
    height: 7vh;
    border-radius: 15px;
    border: 1px solid #85c1e9;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.36) 0%,
      rgba(255, 255, 255, 0.04) 100%
    );
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    font-family: Raleway;
    font-size: 1.4vw;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 3vh;

    &::placeholder {
      color: rgba(245, 245, 245, 0.77);
      padding-left: 2vh;
    }
  `;

  return (
    <FormInput
      type={inputType}
      name={inputName}
      placeholder={placeholderText}
    />
  );
}
