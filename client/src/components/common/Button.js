import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-left: auto;
  height: 35px;
  padding: 10px 20px;
  border: 0;
  background: yellow;
  font-weight: bold;
  cursor: pointer;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
