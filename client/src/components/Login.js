import React from 'react';
import styled from 'styled-components';

import loginbgimage from '../assets/loginbgimage.jpg';

const LoginContainer = styled.div``;

const LeftWrapper = styled.div`
  background-image: url(${(props) => props.bgurl});
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100vh;
`;

const RightWrapper = styled.div``;

const Wrapper = styled.div``;

const Login = () => {
  return (
    <LoginContainer>
      <LeftWrapper bgurl={loginbgimage} />
    </LoginContainer>
  );
};

export default Login;
