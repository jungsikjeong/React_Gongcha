import React, { useEffect } from 'react';
import styled from 'styled-components';
import WOW from 'wowjs';

import { BsSearch } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';

const LeftSideBarContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
`;

const SearchIconBox = styled.div`
  height: 60%;
  width: 80px;
  .icon {
    margin: 45px 23px;
    display: block;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }
`;

const SocialIconBox = styled.div`
  height: 35%;
  width: 80px;
  background: yellow;
  text-align: center;
  padding-top: 27%;
  bottom: 0;
  position: absolute;

  .icon {
    margin: 15px 23px;
    display: block;
    padding: 8px;
    border: 1px solid #000;
    border-radius: 50%;
    cursor: pointer;
    color: #000;
  }
`;

const LeftSideBar = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <LeftSideBarContainer
      className='wow fadeInLeft'
      data-wow-iteration='1'
      data-wow-delay='1s'
    >
      <SearchIconBox>
        <FaList className='icon' />
        <BsSearch className='icon' />
      </SearchIconBox>

      <SocialIconBox>
        <FiFacebook className='icon' />
        <FiInstagram className='icon' />
        <FiTwitter className='icon' />
        <FaPinterestP className='icon' />
      </SocialIconBox>
    </LeftSideBarContainer>
  );
};

export default LeftSideBar;
