import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Header';

// 페이지 전환 효과
const ScreenFrames = keyframes`
 from{
  opacity:0.9;
  transform:translateY(-80px);
 }
 to{
  opacity:1;
  transform:translateY(0);
 }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  overflow: hidden;
`;

const PostPage = () => {
  return (
    <Container>
      <Header />
      PostPage
    </Container>
  );
};

export default PostPage;
