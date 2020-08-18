import React, { useEffect } from 'react';
import styled from 'styled-components';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';

const LeftSideBarContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;

  @media (max-width: 768px) {
    display: none;
  }
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
    transition: 0.6s;

    :hover {
      /* 마우스 위로 올리면 아이콘 위로 올라감 */
      transform: translate(0, -10px);
      color: #fff;
    }
  }
`;

const SLink = styled(Link)`
  /* hover시 소셜 아이콘 색상 변경 */
  :nth-child(1) :hover {
    background-color: #3b5999;
  }
  :nth-child(2) :hover {
    background-color: #e4405f;
  }
  :nth-child(3) :hover {
    background-color: #09b83e;
  }
  :nth-child(4) :hover {
    background-color: #333;
  }
`;

const LeftSideBar = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <LeftSideBarContainer
    // className='wow fadeInLeft'
    // data-wow-iteration='1'
    // data-wow-delay='1s'
    >
      <SearchIconBox>
        <FaList className='icon' />
        <BsSearch className='icon' />
      </SearchIconBox>

      <SocialIconBox>
        <SLink to='#'>
          <FiFacebook className='icon' />
        </SLink>
        <SLink to='#'>
          <FiInstagram className='icon' />
        </SLink>
        <SLink to='#'>
          <FiHome className='icon' />
        </SLink>
        <SLink to='#'>
          <GoMarkGithub className='icon' />
        </SLink>
      </SocialIconBox>
    </LeftSideBarContainer>
  );
};

export default LeftSideBar;
