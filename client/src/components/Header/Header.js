import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { RiCloseLine } from 'react-icons/ri';

import Button from '../common/Button';

const NavBar = styled.div`
  display: flex;
  padding: 40px 120px;

  @media (max-width: 700px) {
    padding: 10px 30px;
  }
`;

const NavMenu = styled.div`
  display: flex;
`;

const NavLogo = styled.div`
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  .icon-bars {
    display: none;
  }

  @media (max-width: 700px) {
    display: block;
    height: 100vh;
    width: 200px;
    background: #000;
    top: 0;
    /* right: -200px; */
    right: 0;
    position: absolute;
    text-align: left;
    z-index: 2;
    transition: 0.5s;

    .icon-bars {
      display: block;
      position: absolute;
      /* right: 20px; */
      top: 0px;
      display: block;
      color: #fff;
      margin: 10px 25px;
      font-size: 22px;
      cursor: pointer;
    }
  }
`;

const Ul = styled.ul`
  margin-left: 50px;

  @media (max-width: 700px) {
    margin-left: 9px;
    margin-top: 45px;
  }
`;

const Li = styled.li`
  display: inline-block;
  padding: 8px 25px;
  color: #fff;

  ::after {
    content: '';
    width: 0;
    height: 2px;
    background: #cf3e58;
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  :hover::after {
    width: 100%;
  }
`;

const SLink = styled(Link)`
  font-size: 13px;

  @media (max-width: 700px) {
    display: block;
  }
`;

const ButtonStyle = styled(Button)`
  position: absolute;
  right: 3rem;

  ::after {
    content: '';
    width: 0;
    height: 2px;
    background: #cf3e58;
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  :hover::after {
    width: 100%;
  }

  @media (max-width: 700px) {
    position: absolute;
    left: 0px;
    top: 10rem;
    z-index: 2;
    margin-left: 33px;
    margin-right: 50px;
    margin-top: 10px;

    ::after {
      content: '';
      width: 0;
      height: 2px;
      background: #cf3e58;
      display: block;
      margin: auto;
      transition: 0.5s;
    }

    :hover::after {
      width: 100%;
    }
  }
`;

const Header = () => {
  return (
    <NavBar>
      <NavMenu>
        <NavLogo>
          <h1>
            공들여 <br />
            맛있는 차 <br />
            공차
          </h1>
        </NavLogo>

        <NavLinks>
          <RiCloseLine
            className='icon-bars'
            style={{ fontWeight: 'bold', fontSize: '2rem' }}
            // onClick={onCloseMenu}
          />

          <Ul>
            <Link to='#'>
              <Li>HOME</Li>
            </Link>
            <Link to='#'>
              <Li>ABOUT</Li>
            </Link>
            <Link to='#'>
              <Li>RECIPE</Li>
            </Link>
          </Ul>
          <ButtonStyle>SIGN IN</ButtonStyle>
        </NavLinks>
      </NavMenu>
    </NavBar>
  );
};

export default Header;
