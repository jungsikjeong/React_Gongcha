import React from 'react';
import styled, { keyframes } from 'styled-components';
// components
import Header from './Header';

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

const Container = styled.div`
  background: #000;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  animation: ${ScreenFrames} 0.75s;
`;

const Span = styled.span`
  color: white;
`;

const Profile = () => {
  return (
    <Container>
      <Header />
      <Span>Profile페이지</Span>
    </Container>
  );
};

export default Profile;
