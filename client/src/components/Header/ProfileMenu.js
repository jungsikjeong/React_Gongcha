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
        marginTop: '2.9rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        position: 'absolute',
        right: '-1.2rem',
      }}
    >
      <Menu.Item>
        <Link to='/write'>Write a post</Link>
      </Menu.Item>
      <Menu.Item>
        {/* to do:: 로그인한 유저의 마이페이지로 가게끔 */}
        <Link to='/profile'>My Pages</Link>
      </Menu.Item>
      <Menu.Item danger onClick={onClick}>
        Log out
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
          <Link to='#'>
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
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(withRouter(ProfileMenu));
