import React, { useEffect } from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import baImage from '../../assets/background.jpg';
import WOW from 'wowjs';

// import Button from '../common/Button';
import LeftSideBar from '../Layouts/LeftSideBar';
import MainFooter from '../Layouts/MainFooter';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url(${baImage});
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
  }

  span {
    color: #cf3e58;
    opacity: 0.8;
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
        <h1
          className='wow fadeInDown'
          data-wow-iteration='1'
          data-wow-delay='1.8s'
        >
          <span>Tea</span>로 시작하는 <br />
          <span>The</span> 기분 좋은 아침!
        </h1>
        {/* <Button>EXPLORE</Button> */}

        <LeftSideBar />

        <MainFooter />
      </BannerTitle>
    </Container>
  );
};

export default Main;
