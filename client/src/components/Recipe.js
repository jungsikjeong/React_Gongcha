import React, { Fragment } from 'react';
import Header from './Header';
import styled, { keyframes } from 'styled-components';

import milktea01 from '../assets/milktea01.png';
import milktea02 from '../assets/milktea02.png';
import milktea03 from '../assets/milktea03.jpg';
import milktea04 from '../assets/milktea04.jpg';
import milktea05 from '../assets/milktea05.jpg';
import milktea06 from '../assets/milktea06.jpg';
import bullet2 from '../assets/bullet2.png';

import { Link } from 'react-router-dom';

// 페이지 전환효과
const ScreenFrames = keyframes`
 from{
  transform:translateY(-10px);
 }
 to{
  transform:translateY(0);
 }
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  font-family: consolas;
  animation: ${ScreenFrames} 0.75s;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Box = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  margin: 20px 0;
  box-sizing: border-box;
  overflow: hidden;

  :hover {
    .imgBox {
      clip-path: circle(80px at center 100px);
      transition-delay: 0s;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* object-fit: cover; */
      }
    }

    h2 {
      opacity: 1;
      transition: translateY(0px);
      transition-delay: 0.5s;
    }

    p {
      opacity: 1;
      transition: translateY(0px);
      transition-delay: 0.7s;
    }

    /* .link {
      opacity: 1;
      transition: translateY(0px);
      transition-delay: 0.9s;
    } */
  }
`;

const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  clip-path: circle(400px at center 100px);
  transition: 0.5s;
  transition-delay: 0.5s;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 55%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;

  h2 {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    letter-spacing: -3px;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
  }

  p {
    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    margin-bottom: 10px;
    color: #fff;
  }
`;

// const SLink = styled(Link)`
//   background: #000;
//   color: #fff;
//   padding: 5px;
//   display: inline-block;

//   opacity: 0;
//   transition: 0.5s;
//   transform: translateY(20px);
// `;

const TLink = styled(Link)`
  display: block;
  height: 22px;
  padding: 12px 0 12px 19px;
  background: url(${(props) => props.bgurl}) 0 center no-repeat;
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

const Recipe = () => {
  return (
    <div style={{ background: '#000' }}>
      <Header />
      <Ul>
        <Li>
          <TLink to='/recipe' bgurl={bullet2}>
            베스트 콤비네이션
          </TLink>
        </Li>
        <Li>
          <TLink to='/originalTea' bgurl={bullet2}>
            오리지널 티
          </TLink>
        </Li>

        <Li>
          <TLink to='/smoothie' bgurl={bullet2}>
            스무디 & 크러쉬
          </TLink>
        </Li>
      </Ul>

      <Container>
        <Wrapper>
          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea01} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#B48F68' }}>블랙 밀크티 + 펄</h2>
              <p>공차 대표 메뉴 블랙밀크티와 쫄깃쫄깃한 펄의 콤비네이션</p>
              {/* <SLink to='#' className='link'>
                Read More
              </SLink> */}
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea02} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#BC8A9A' }}>타로 밀크티 + 펄</h2>
              <p>고소한 타로밀크티와 쫀득한 펄이 만난 공차의 베스트 셀러</p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea03} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#681C01' }}>초콜렛 밀크티 + 밀크폼</h2>
              <p>
                공차만의 깊고 풍부한 초콜렛 밀크티에 부드러운 밀크폼을 더한
                최고의 조합
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea04} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#FDCD0E', letterSpacing: '-4px' }}>
                망고 요구르트 + 화이트펄
              </h2>
              <p>
                달콤한 망고 과육과 요구르트에 화이트펄의 꼬들꼬들함이 느껴지는
                주스
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea05} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#FDCD0E' }}>우롱 밀크티 + 코코넛</h2>
              <p>
                깊은 향의 우롱밀크티에 쫄깃쫄깃한 식감의 코코넛을 더한 밀크티
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea06} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#FDCD0E' }}>
                청포도 그린티 에이드 + 알로에
              </h2>
              <p>
                상큼 달콤한 청포도 그린티에이드와 사각사각한 알로에 토핑을 더한
                그린티에이드
              </p>
            </Content>
          </Box>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Recipe;
