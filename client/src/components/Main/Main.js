import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import bgImage from '../../assets/background.jpg';
import WOW from 'wowjs';

import MainFooter from '../Layouts/MainFooter';
import Header from '../Header';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url(${bgImage});
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  position: relative;
`;

const BannerTitle = styled.div`
  margin: 80px 130px;
  color: #fff;

  h1 {
    font-size: 64px;
    margin-bottom: 30px;
    letter-spacing: -5px;

    .textColor {
      color: #cf3e58;
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    margin: 80px 40px;

    h1 {
      font-size: 50px;
      letter-spacing: -5px;
    }
  }
`;

const Main = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Container>
      <Header />

      <BannerTitle>
        <h1 className='wow fadeIn' data-wow-iteration='1' data-wow-delay='1.5s'>
          <span className='textColor'>Tea</span> 로 시작하는 <br />
          <span className='textColor'>The</span> 기분 좋은 아침!
        </h1>
        {/* <Button>EXPLORE</Button> */}

        <MainFooter />
      </BannerTitle>
    </Container>
  );
};

export default Main;
