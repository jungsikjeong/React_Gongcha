import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import bgImage from '../assets/background.jpg';
import Header from './Header';

// 페이지 전환효과
const ScreenFrames = keyframes`
 from{
  transform:translateY(-10px);
 }
 to{
  transform:translateY(0);
 }
`;

const LoginContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url(${bgImage});
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  position: relative;
  height: 100vh;
`;

const Wrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  animation: ${ScreenFrames} 0.75s;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  input {
    width: 100%;
    font-size: 16px;
    border: 0;
    border-radius: 5px;
    outline: 0;
    padding: 10px 15px;
    margin-top: 15px;
  }

  span {
    color: #fff;
    font-size: 20px;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: red;
`;

const SLink = styled(Link)`
  margin-top: 5px;
  background: #c1575f;
  text-align: center;

  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
`;

const Register = () => {
  return (
    <LoginContainer>
      <Header />
      <Wrapper>
        <Form>
          <input
            autoComplete='email'
            name='email'
            placeholder='Email@admin.com'
          />
          <input autoComplete='name' name='username' placeholder='userName' />
          <input
            autoComplete='new-password'
            type='password'
            name='password'
            placeholder='Password'
          />
          <input
            autoComplete='new-password'
            type='password'
            name='passwordConfirm'
            placeholder='passwordCheck'
          />
          <Button style={{ marginTop: '15px' }}>sign up</Button>
          <span>or</span>
          <SLink to='/login'>sign in</SLink>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Register;
