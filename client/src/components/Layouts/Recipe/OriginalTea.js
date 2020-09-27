import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import styled, { keyframes } from 'styled-components';

import milktea07 from '../../../assets/milktea07.jpg';
import milktea08 from '../../../assets/milktea08.jpg';
import milktea09 from '../../../assets/milktea09.jpg';
import milktea10 from '../../../assets/milktea10.jpg';
import bullet2 from '../../../assets/bullet2.png';

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
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  font-family: consolas;
  animation: ${ScreenFrames} 0.75s;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1260px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Box = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  margin: 20px 10px;
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

  :hover {
    color: #fff;
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

const OriginalTea = () => {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
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
              <img src={milktea07} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#DBAF31' }}>자스민 그린티</h2>
              <p>향긋한 자스민 꽃잎을 함께 우려내는 그린티 (HOT / ICED)</p>
              {/* <SLink to='#' className='link'>
                Read More
              </SLink> */}
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea08} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#E5B034' }}>우롱티</h2>
              <p>묵직하고 깊은 향을 간직한 고소한 우롱차 (HOT / ICED)​</p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea09} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#C06026' }}>블랙티</h2>
              <p>
                진한 향과 감미로운 맛을 느낄 수있는 대표적인 홍차, 블랙티 (HOT /
                ICED)​
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea10} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#EF9122' }}>얼그레이티</h2>
              <p>향긋한 베르가못향이 가미된 얼그레이티 (HOT / ICED)​</p>
            </Content>
          </Box>
        </Wrapper>
      </Container>
    </div>
  );
};

export default OriginalTea;
