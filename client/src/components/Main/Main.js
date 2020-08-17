import React, { useEffect } from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import baImage from '../../assets/background.jpg';
import WOW from 'wowjs';

import LeftSideBar from '../Layouts/LeftSideBar';
import MainFooter from '../Layouts/MainFooter';
import { FaBars } from 'react-icons/fa';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url(${baImage});
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  position: relative;

  .open-icon {
    display: none;
    @media (max-width: 700px) {
      display: block;
      position: absolute;
      right: 20px;
      top: 5px;
      color: #fff;
      margin: 10px 25px;
      font-size: 22px;
      z-index: 2;
      cursor: pointer;
    }
  }
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

  @media (max-width: 700px) {
    margin: 80px 40px;

    h1 {
      font-size: 50px;
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
      {/* onClick={onShowMenu} */}
      <FaBars className='open-icon' />

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
