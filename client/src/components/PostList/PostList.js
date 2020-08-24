import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Header';

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

const PostListContainer = styled.div`
  background: black;
  height: 100vh;
  overflow: hidden;

  animation: ${ScreenFrames} 0.75s;
`;

const PostList = () => {
  return (
    <PostListContainer>
      <Header />

      <h2
        style={{
          color: 'white',
          margin: '50% auto',
          textAlign: 'center',
        }}
      >
        준비중입니다.😅
      </h2>
    </PostListContainer>
  );
};

export default PostList;
