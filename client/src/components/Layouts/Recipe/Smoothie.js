import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
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

const Smoothie = () => {
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
              <img src={milktea11} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#FDCD0E' }}>망고 스무디</h2>
              <p>
                농축된 달콤한 망고와 밀크를 함께 갈아만든 망고 스무디(ONLY
                ICED)​
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea12} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#BC8A9A' }}>초코 쿠앤크 스무디</h2>
              <p>
                진한 초콜렛과 달콤한쿠키앤크림을 밀크와 함께 갈아만든 오레오
                초콜렛 스무디(ONLY ICED)​
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea13} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#B0AF31' }}>청포도 스무디</h2>
              <p>
                시원달콤한 청포도과즙과 알로에 알갱이가 쏙쏙 들어오는 재미가
                일품인 청포도 스무디 (ONLY ICED)
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea14} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#FDCD0E' }}>블랙 밀크티 크러쉬</h2>
              <p>
                공차 NO.1 메뉴인 블랙밀크티와 얼음을 함께 갈아 만든 크러쉬의
                청량함과 쫀득쫀득한 펄의 식감을 즐길 수 있는 시그니처 음료(ONLY
                ICED)
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea15} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#BC8E61' }}>커피 밀크티 크러쉬 + 펄</h2>
              <p>
                향긋한 블랙 밀크 티에 진한 커피를 더해 한여름 얼음과 함께 갈아
                더욱 시원하게 즐기는 음료 (ONLY ICED)
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea16} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#BA484B' }}>딸기&요구르트 크러쉬</h2>
              <p>
                얼그레이티를 넣어 만든 요구르트 크러쉬에 리얼 딸기 과즙이 함유된
                새콤달콤한 딸기 쥬얼리를 더한 시즌 음료 (ONLY ICED)
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea17} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#BC8E61', letterSpacing: '-5px' }}>
                커피 밀크티 크러쉬 + 밀크폼
              </h2>
              <p>
                향긋한 블랙 밀크 티에 진한 커피를 더해 한여름 얼음과 함께 갈아
                더욱 시원하게 즐기는 시즌 한정 음료 (ONLY ICED)
              </p>
            </Content>
          </Box>

          <Box>
            <ImgBox className='imgBox'>
              <img src={milktea18} alt='view' />
            </ImgBox>
            <Content>
              <h2 style={{ color: '#AFBC61' }}>제주 그린티 스무디</h2>
              <p>
                녹차가루와 부드러운 밀크폼을 함께 즐길 수 있는 제주 그린티
                스무디
              </p>
            </Content>
          </Box>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Smoothie;
