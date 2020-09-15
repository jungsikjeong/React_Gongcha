import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// 아이콘 및 사진
import { RiCloseLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';

// 컴포넌트
import Button from '../common/Button';
import ProfileMenu from './ProfileMenu';

const NavBar = styled.div`
  display: flex;
  padding: 40px 120px;

  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  line-height: 2rem;

  .open-icon {
    display: none;

    @media (max-width: 768px) {
      display: block;
      position: absolute;
      right: 20px;
      top: 2rem;
      color: #fff;
      margin: 10px 25px;
      font-size: 22px;
      z-index: 2;
      cursor: pointer;
    }
  }
`;

const NavLogo = styled.div`
  color: #fff;

  h1 {
    font-weight: bold;
  }
  img {
    vertical-align: middle;
    width: 30px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  .icon-bars {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    height: 100vh;
    width: 200px;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    right: 0;
    position: absolute;
    text-align: left;
    z-index: 2;

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

const DesktopNavLinks = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Ul = styled.ul`
  margin-left: 50px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-left: 9px;
    margin-top: 45px;
    display: flex;
    flex-direction: column;
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
  font-weight: 900;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ButtonStyle = styled(Button)`
  position: absolute;
  right: 3rem;
  top: 5rem;
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

  img {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-text {
    display: block;
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 0px;
    top: 15rem;
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

const Header = ({ auth: { isAuthenticated, user } }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(true);

  const onShowMenu = () => {
    setMenuOpen(true);
    setMenuActive(false);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
    setMenuActive(true);
  };

  return (
    <NavBar>
      <NavMenu>
        <NavLogo>
          <Link to='/'>
            <h1>
              공들여 <br />
              맛있는 차 <br />
              공차
              <img src={logo} alt='logo' />
            </h1>
          </Link>
        </NavLogo>

        {/* 모바일 사이즈에서 메뉴 아이콘 */}
        {menuActive && <FaBars className='open-icon' onClick={onShowMenu} />}

        {/*데스크탑 사이즈에서 메뉴 활성화 */}
        <DesktopNavLinks>
          <Ul>
            <Link to='/'>
              <Li>HOME</Li>
            </Link>
            <Link to='/about'>
              <Li>ABOUT</Li>
            </Link>
            <Link to='/recipe'>
              <Li>RECIPE</Li>
            </Link>
            <Link to='/postList'>
              <Li>POSTS</Li>
            </Link>
          </Ul>
          {isAuthenticated ? (
            <ProfileMenu />
          ) : (
            <Link to='/login'>
              <ButtonStyle>SIGN IN</ButtonStyle>
            </Link>
          )}
        </DesktopNavLinks>

        {/* 모바일 사이즈에서 메뉴 활성화 */}
        {menuOpen && (
          <NavLinks>
            <RiCloseLine
              className='icon-bars'
              style={{ fontWeight: 'bold', fontSize: '2rem' }}
              onClick={onCloseMenu}
            />
            <Ul>
              <Link to='/'>
                <Li>HOME</Li>
              </Link>
              <Link to='/about'>
                <Li>ABOUT</Li>
              </Link>
              <Link to='/recipe'>
                <Li>RECIPE</Li>
              </Link>
              <Link to='/postList'>
                <Li>POSTS</Li>
              </Link>
              {isAuthenticated && isAuthenticated ? (
                <Fragment>
                  <Link to='/write'>
                    <Li>WRITE</Li>
                  </Link>
                  {/* to do:: 로그인한 유저의 마이페이지로 가게끔 */}
                  <Link to='/profile'>
                    <Li>My Pages</Li>
                  </Link>
                </Fragment>
              ) : (
                <Link to='/login'>
                  <Li>SIGN IN</Li>
                </Link>
              )}
            </Ul>
          </NavLinks>
        )}
      </NavMenu>
    </NavBar>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Header);
