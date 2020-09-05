import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import Button from '../common/Button';

const ProfileMenuContainer = styled.div`
  position: absolute;
  right: 3rem;
  top: 5rem;
`;

const ButtonStyle = styled(Button)`
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

const menu = ({ onClick, history }) => {
  return (
    <Menu
      style={{
        marginTop: '3rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        position: 'absolute',
        right: '-2.5rem',
      }}
    >
      <Menu.Item>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='http://www.alipay.com/'
        >
          1st menu item
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='http://www.taobao.com/'
        >
          2nd menu item
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='http://www.tmall.com/'
        >
          3rd menu item
        </Link>
      </Menu.Item>
      <Menu.Item danger onClick={onClick}>
        log out
      </Menu.Item>
    </Menu>
  );
};

const ProfileMenu = ({ auth: { isAuthenticated, user }, logout, history }) => {
  const onClick = () => {
    logout(history);
  };

  return (
    <ProfileMenuContainer>
      {isAuthenticated && (
        <Dropdown overlay={menu({ onClick, history })}>
          <Link to='/profile'>
            <ButtonStyle>
              <img src={user.avatar} alt='userAvatar' />

              <span className='user-text'> {user.name}님</span>
            </ButtonStyle>
          </Link>
        </Dropdown>
      )}
    </ProfileMenuContainer>
  );
};

ProfileMenu.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(withRouter(ProfileMenu));
