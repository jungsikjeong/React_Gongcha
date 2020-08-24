import React, { useState, Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';

import milktea01 from '../assets/milktea01.png';
import milktea02 from '../assets/milktea02.png';
import milktea03 from '../assets/milktea03.jpg';
import milktea04 from '../assets/milktea04.jpg';
import milktea05 from '../assets/milktea05.jpg';
import milktea06 from '../assets/milktea06.jpg';
import bullet2 from '../assets/bullet2.png';

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
  max-width: 1000px;
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

  ::after {
    content: '';
    width: 0;
    height: 2px;
    background: #983b43;
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  :hover::after {
    width: 100%;
  }
`;

const SLink = styled(Link)`
  display: block;
  height: 22px;
  padding: 12px 0 12px 19px;
  background: url(${(props) => props.bgurl}) 0 center no-repeat;
`;

const Recipe = () => {
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
        베스트 콤비네이션
      </h2>

      <Wrapper>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea01} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#B48F68' }}>블랙 밀크티 + 펄</h2>
            <p>공차 대표 메뉴 블랙밀크티와 쫄깃쫄깃한 펄의 콤비네이션</p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea02} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#BC8A9A' }}>타로 밀크티 + 펄</h2>
            <p>고소한 타로밀크티와 쫀득한 펄이 만난 공차의 베스트 셀러</p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea03} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#681C01' }}>초콜렛 밀크티 + 밀크폼</h2>
            <p>
              공차만의 깊고 풍부한 초콜렛 밀크티에 부드러운 밀크폼을 더한 최고의
              조합
            </p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea04} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#FDCD0E' }}>망고 요구르트 + 화이트펄</h2>
            <p>
              달콤한 망고 과육과 요구르트에 화이트펄의 꼬들꼬들함이 느껴지는
              주스
            </p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea05} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#EBDEC6' }}>우롱 밀크티 + 코코넛</h2>
            <p>깊은 향의 우롱밀크티에 쫄깃쫄깃한 식감의 코코넛을 더한 밀크티</p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea06} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#B0AF31' }}>청포도 에이드 + 알로에</h2>
            <p>
              상큼 달콤한 청포도 그린티에이드와 사각사각한 알로에 토핑을 더한
              그린티에이드
            </p>
          </Details>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Recipe;