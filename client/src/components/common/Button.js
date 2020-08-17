import React from 'react';
import styled from 'styled-components';

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
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
