import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';
// components
import Header from './Header';
import Button from '../components/common/Button';

// 페이지 전환효과
const ScreenFrames = keyframes`
 from{
  opacity:0.9;
  transform:translateY(-10px);
 }
 to{
  opacity:1;
  transform:translateY(0);
 }
 `;

const ProfileContainer = styled.div`
  background: #000;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${ScreenFrames} 0.75s;
`;

const UserContainer = styled.div``;

const Avatar = styled.div``;

const StyledButton = styled(Button)``;

const Span = styled.span`
  color: white;
`;

const Profile = ({ history, logout }) => {
  const onClick = () => {
    logout(history);
  };
  return (
    <ProfileContainer>
      <Header />

      <Wrapper>
        <UserContainer>
          <StyledButton onClick={onClick}>로그아웃</StyledButton>
        </UserContainer>
      </Wrapper>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Profile);
