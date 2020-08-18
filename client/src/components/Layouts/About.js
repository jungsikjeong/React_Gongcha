import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// images
import imageOwn from '../../assets/about-img01.jpg';
import imageTwo from '../../assets/about-img02.jpg';
import imageThree from '../../assets/about-img03.jpg';
import imageFour from '../../assets/about-img04.jpg';

// Components
import LeftSideBar from './LeftSideBar';
import Header from '../Header/Header';

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

const AboutContainer = styled.div`
  background: black;
  animation: ${ScreenFrames} 0.75s;
`;

const Section = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow-x: hidden;
  height: 30rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .Section-text {
    position: relative;
    width: 100%;

    h1,
    h3 {
      text-align: center;
      color: white;
    }

    .span-width {
      ::after {
        content: '';
        width: 50px;
        height: 2px;
        background: #fff;
        display: block;
        margin: auto;
        transition: 0.5s;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Header />
      <LeftSideBar />

      <Section bgUrl={imageOwn}>
        <div className='Section-text'>
          <h1>공차는 고민합니다.</h1>
          <br />
          <br />

          {/* 가로 줄 */}
          <span className='span-width' />
          <br />
          <br />
          <h3>
            많은 이들에게 즐겁고 쉬운 차(茶) 문화를 <br />
            이야기 할 수 있는 방법을.
          </h3>
        </div>
      </Section>

      <Section bgUrl={imageTwo} style={{ marginTop: '5rem' }}>
        <div className='Section-text'>
          <h1>공차는 고민합니다.</h1>
          <br />
          <br />

          {/* 가로 줄 */}
          <span className='span-width' />
          <br />
          <br />
          <h3>
            다양한 메뉴와 즐거운 선택을 통해
            <br />
            남녀노소 누구나 쉽게 즐기는 <br />
            차(茶) 문화를.
          </h3>
        </div>
      </Section>

      <Section bgUrl={imageThree} style={{ marginTop: '5rem' }}>
        <div className='Section-text'>
          <h1>공차는 고민합니다.</h1>
          <br />
          <br />

          {/* 가로 줄 */}
          <span className='span-width' />
          <br />
          <br />
          <h3>
            고객들에게 만족스러운 경험을 제공하는
            <br />
            브랜드가 되기 위해.
          </h3>
        </div>
      </Section>

      <Section bgUrl={imageFour} style={{ marginTop: '5rem', height: '40rem' }}>
        <div className='Section-text'>
          <h1>공차는 고민합니다.</h1>
          <br />
          <br />

          {/* 가로 줄 */}
          <span className='span-width' />
          <br />
          <br />
          <h3>더 쉽고, 더 즐거우며, 기억에 남는 서비스와 고객 경험을.</h3>
        </div>
      </Section>
    </AboutContainer>
  );
};

export default About;
