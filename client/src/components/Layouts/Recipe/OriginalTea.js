import React, { useState, Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../Header';

import milktea07 from '../../../assets/milktea07.jpg';
import milktea08 from '../../../assets/milktea08.jpg';
import milktea09 from '../../../assets/milktea09.jpg';
import milktea10 from '../../../assets/milktea10.jpg';
import bullet2 from '../../../assets/bullet2.png';

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
  background: black;
  overflow: hidden;

  animation: ${ScreenFrames} 0.75s;
`;

const Wrapper = styled.div`
  max-width: 1260px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  position: relative;
  margin: 20px 0;
  width: 300px;
  height: 400px;
  background: #fff;
  transform-style: preserve-3d;
  transform: perspective(2000px);
  transition: 1s;
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5);

  :hover {
    transform: perspective(2000px) rotate(-10deg);
    box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5);
    z-index: 1000;

    .imagebox {
      transform: rotateY(-135deg);
    }
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  transform-origin: left;
  z-index: 1;
  transition: 1s;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 20px;

  h2 {
    letter-spacing: -3px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: #666666;
  }
`;

const Ul = styled.ul`
  padding: 16px 0;
  overflow: hidden;
  border-top: 1px solid white;
  border-bottom: '1px solid white';

  font-family: 'NanumGothic', 'dotum', 'Arial', 'sans-serif';

  display: flex;
  justify-content: space-around;
`;

const Li = styled.li`
  color: white;
`;

const SLink = styled(Link)`
  display: block;
  height: 22px;
  padding: 12px 0 12px 19px;
  background: url(${(props) => props.bgurl}) 0 center no-repeat;
`;

const OriginalTea = () => {
  return (
    <Container>
      <Header />
      <Ul>
        <Li>
          <SLink to='/recipe' bgurl={bullet2}>
            베스트 콤비네이션
          </SLink>
        </Li>
        <Li>
          <SLink to='/originalTea' bgurl={bullet2}>
            오리지널 티
          </SLink>
        </Li>

        <Li>
          <SLink to='/smoothie' bgurl={bullet2}>
            스무디 & 크러쉬
          </SLink>
        </Li>
      </Ul>

      <h2
        style={{
          color: '#fff',
          textAlign: 'center',
        }}
      >
        오리지널 티
      </h2>

      <Wrapper>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea07} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#DBAF31' }}>자스민 그린티</h2>
            <p>향긋한 자스민 꽃잎을 함께 우려내는 그린티 (HOT / ICED)</p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea08} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#E5B034' }}>우롱티</h2>
            <p>묵직하고 깊은 향을 간직한 고소한 우롱차 (HOT / ICED)​</p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea09} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#C06026' }}>블랙티</h2>
            <p>
              진한 향과 감미로운 맛을 느낄 수있는 대표적인 홍차, 블랙티 (HOT /
              ICED)​
            </p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea10} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#EF9122' }}>얼그레이티</h2>
            <p>향긋한 베르가못향이 가미된 얼그레이티 (HOT / ICED)​</p>
          </Details>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default OriginalTea;
