import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../common/Button';

const NavBar = styled.div`
  display: flex;
  padding: 40px 120px;
`;

const NavMenu = styled.div`
  display: flex;
`;

const NavLogo = styled.div`
  color: #fff;
`;

const NavLinks = styled.div`
  flex: 1;
`;

const Ul = styled.ul`
  margin-left: 50px;
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
        </NavLinks>
      </NavMenu>
      <Button>SIGN IN</Button>
    </NavBar>
  );
};

export default Header;
