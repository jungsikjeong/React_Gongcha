import React, { useEffect, useState } from 'react';
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

    @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    margin: 80px 40px;

    h1 {
      font-size: 50px;
    }
  }
`;

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(true);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  // 테스트
  const onShowMenu = () => {
    setMenuOpen(true);
    setMenuActive(false);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
    setMenuActive(true);
  };

  return (
    <Container>
      <Header onCloseMenu={onCloseMenu} menuOpen={menuOpen} />

      {menuActive && <FaBars className='open-icon' onClick={onShowMenu} />}

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
