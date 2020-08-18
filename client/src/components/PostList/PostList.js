import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Header/Header';
import LeftSideBar from '../Layouts/LeftSideBar';

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

  animation: ${ScreenFrames} 0.75s;
`;

const PostList = () => {
  return (
    <PostListContainer>
      <Header />
      <LeftSideBar />
      PostLIST
    </PostListContainer>
  );
};

export default PostList;
