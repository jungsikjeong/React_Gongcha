import React, { useState, Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../Header';

import milktea11 from '../../../assets/milktea11.jpg';
import milktea12 from '../../../assets/milktea12.jpg';
import milktea13 from '../../../assets/milktea13.jpg';
import milktea14 from '../../../assets/milktea14.jpg';
import milktea15 from '../../../assets/milktea15.jpg';
import milktea16 from '../../../assets/milktea16.jpg';
import milktea17 from '../../../assets/milktea17.jpg';
import milktea18 from '../../../assets/milktea18.jpg';
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

const Smoothie = () => {
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
            <img src={milktea11} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#FDCD0E' }}>망고 스무디</h2>
            <p>
              농축된 달콤한 망고와 밀크를 함께 갈아만든 망고 스무디(ONLY ICED)​
            </p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea12} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#BC8A9A' }}>초코 쿠앤크 스무디</h2>
            <p>
              진한 초콜렛과 달콤한쿠키앤크림을 밀크와 함께 갈아만든 오레오
              초콜렛 스무디(ONLY ICED)​
            </p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea13} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#B0AF31' }}>청포도 스무디</h2>
            <p>
              시원달콤한 청포도과즙과 알로에 알갱이가 쏙쏙 들어오는 재미가
              일품인 청포도 스무디 (ONLY ICED)
            </p>
          </Details>
        </Card>
        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea14} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#FDCD0E' }}>블랙 밀크티 크러쉬</h2>
            <p>
              공차 NO.1 메뉴인 블랙밀크티와 얼음을 함께 갈아 만든 크러쉬의
              청량함과 쫀득쫀득한 펄의 식감을 즐길 수 있는 시그니처 음료(ONLY
              ICED)
            </p>
          </Details>
        </Card>

        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea15} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#BC8E61' }}>커피 밀크티 크러쉬 + 펄</h2>
            <p>
              향긋한 블랙 밀크 티에 진한 커피를 더해 한여름 얼음과 함께 갈아
              더욱 시원하게 즐기는 음료 (ONLY ICED)
            </p>
          </Details>
        </Card>

        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea16} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#BA484B' }}>딸기&요구르트 크러쉬</h2>
            <p>
              얼그레이티를 넣어 만든 요구르트 크러쉬에 리얼 딸기 과즙이 함유된
              새콤달콤한 딸기 쥬얼리를 더한 시즌 음료 (ONLY ICED)
            </p>
          </Details>
        </Card>

        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea17} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#BC8E61', letterSpacing: '-4px' }}>
              커피 밀크티 크러쉬 + 밀크폼
            </h2>
            <p>
              향긋한 블랙 밀크 티에 진한 커피를 더해 한여름 얼음과 함께 갈아
              더욱 시원하게 즐기는 시즌 한정 음료 (ONLY ICED)
            </p>
          </Details>
        </Card>

        <Card>
          <ImageBox className='imagebox'>
            <img src={milktea18} alt='views' />
          </ImageBox>
          <Details>
            <h2 style={{ color: '#AFBC61' }}>제주 그린티 스무디</h2>
            <p>
              녹차가루와 부드러운 밀크폼을 함께 즐길 수 있는 제주 그린티 스무디
            </p>
          </Details>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Smoothie;
