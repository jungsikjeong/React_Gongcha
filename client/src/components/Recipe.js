import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Header from './Header';
import FbImageGrid from 'react-fb-image-grid';

import milktea01 from '../assets/milktea01.png';
import milktea02 from '../assets/milktea02.png';
import milktea03 from '../assets/milktea03.png';
import milktea04 from '../assets/milktea04.jpg';
import milktea05 from '../assets/milktea05.jpg';
import milktea06 from '../assets/milktea06.jpg';

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
  min-height: 100vh;
  background: #111;
  animation: ${ScreenFrames} 0.75s;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
`;

const Recipe = () => {
  const [images, setImages] = useState([
    milktea01,
    milktea02,
    milktea03,
    milktea04,
    milktea05,
    milktea06,
  ]);

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Recipe;
