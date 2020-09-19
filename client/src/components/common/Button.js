import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  outline: none;
  color: #fff;
  font-weight: bold;
  /* border: 1px solid #fff; */
  font-size: 17px;
  background: rgba(0, 0, 0, 0);
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.imageChange &&
    css`
      width: 100%;
      margin-top: 10px;
      padding: 3px;
      background: #00b9f6;
    `}

  ${(props) =>
    props.logoutBtn &&
    css`
      width: 100%;
      margin-top: 10px;
      padding: 3px;
      background: red;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
