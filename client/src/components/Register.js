import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImage from '../assets/background.jpg';

const LoginContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url(${bgImage});
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: red;
`;

const Register = () => {
  return (
    <LoginContainer>
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
          <Button style={{ marginTop: '15px' }}>sign in</Button>
          <span>or</span>
          <Button style={{ marginTop: '5px', background: '#C1575F' }}>
            <Link to='/register'> sign up </Link>
          </Button>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Register;
