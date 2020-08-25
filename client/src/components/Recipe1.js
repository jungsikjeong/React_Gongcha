import React from 'react';
import styled from 'styled-components';

import milktea01 from '../assets/milktea01.png';
import milktea02 from '../assets/milktea02.png';
import milktea03 from '../assets/milktea03.jpg';
import milktea04 from '../assets/milktea04.jpg';
import milktea05 from '../assets/milktea05.jpg';
import milktea06 from '../assets/milktea06.jpg';
import bullet2 from '../assets/bullet2.png';

import milktea10 from '../assets/milktea10.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: consolas;
`;

const Wrapper = styled.div`
  position: relative;
  width: 1200px;
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

    .link {
      opacity: 1;
      transition: translateY(0px);
      transition-delay: 0.9s;
    }
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

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
  }

  p {
    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    margin-bottom: 10px;
  }
`;

const SLink = styled(Link)`
  background: #000;
  color: #fff;
  padding: 5px;
  display: inline-block;

  opacity: 0;
  transition: 0.5s;
  transform: translateY(20px);
`;

const Recipe1 = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <ImgBox className='imgBox'>
            <img src={milktea01} alt='view' />
          </ImgBox>
          <Content>
            <h2>블랙 밀크티</h2>
            <p>공차 대표 메뉴 블랙밀크티와 쫄깃쫄깃한 펄의 콤비네이션</p>
            <SLink to='#' className='link'>
              Read More
            </SLink>
          </Content>
        </Box>

        <Box>
          <ImgBox className='imgBox'>
            <img src={milktea02} alt='view' />
          </ImgBox>
          <Content>
            <h2>블랙 밀크티</h2>
            <p>공차 대표 메뉴 블랙밀크티와 쫄깃쫄깃한 펄의 콤비네이션</p>
            <SLink to='#' className='link'>
              Read More
            </SLink>
          </Content>
        </Box>

        <Box>
          <ImgBox className='imgBox'>
            <img src={milktea03} alt='view' />
          </ImgBox>
          <Content>
            <h2>블랙 밀크티</h2>
            <p>공차 대표 메뉴 블랙밀크티와 쫄깃쫄깃한 펄의 콤비네이션</p>
            <SLink to='#' className='link'>
              Read More
            </SLink>
          </Content>
        </Box>

        <Box>
          <ImgBox className='imgBox'>
            <img src={milktea04} alt='view' />
          </ImgBox>
          <Content>
            <h2>블랙 밀크티</h2>
            <p>공차 대표 메뉴 블랙밀크티와 쫄깃쫄깃한 펄의 콤비네이션</p>
            <SLink to='#' className='link'>
              Read More
            </SLink>
          </Content>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Recipe1;
