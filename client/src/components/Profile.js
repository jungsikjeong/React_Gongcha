import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { logout, loadUser } from '../actions/auth';
import {
  avatarChange,
  profileChange,
  clearUserProfile,
} from '../actions/users';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';

// components
import Header from './Header/Header';
import Button from '../components/common/Button';
import Loading from './common/Loading';
import Alert from './common/Alert';

// 페이지 전환효과
const ScreenFrames = keyframes`
 from{
  opacity:0.9;
  transform:translateY(-10px);
 }
 to{
  opacity:1;
  transform:translateY(0);
 }
 `;

const ProfileContainer = styled.div`
  background: #000;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${ScreenFrames} 0.75s;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 3px;
  background: #04aaff;
  border: 0;
  outline: none;
  color: #fff;
  font-weight: bold;

  font-size: 17px;
  cursor: pointer;

  ::placeholder {
    color: #fff;
    text-align: center;
  }
`;

const Avatar = styled.div`
  width: 7rem;
  width: 200px;
  height: 200px;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

const Profile = ({
  auth: { user, loading },
  users: { userAvatarUrl },
  history,
  logout,
  avatarChange,
  profileChange,
  clearUserProfile,
  loadUser,
  setAlert,
}) => {
  const [newPhotoURL, setNewPhotoURL] = useState('');
  const [newName, setNewName] = useState('');

  const onHandleLogout = () => {
    logout(history);
  };

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;

    // 파일을 서버에 전송하기위한것
    const formData = new FormData();

    formData.append('file', files[0]);

    avatarChange(formData);
  };

  const onNameChange = (e) => {
    setNewName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: newName,
      avatar: newPhotoURL,
    };
    // 유저프로필 변경후 재부팅시켜서 최신화시킴
    profileChange(body);
    loadUser();
    setAlert('프로필 변경 완료', 'success');
  };

  // 프로필 이미지 변경시 화면에 띄워줌
  useEffect(() => {
    setNewPhotoURL(userAvatarUrl);
  }, [userAvatarUrl]);

  // 페이지 벗어날때 초기화
  useEffect(() => {
    return () => {
      clearUserProfile();
    };
  }, []);

  return (
    <ProfileContainer>
      <Header />

      {/* to do:: 자기가 쓴 게시글 목록들 가져오기 */}
      {/* to do:: 유저프로필편집화면 CSS */}

      {loading ? (
        <Loading />
      ) : (
        <>
          <Alert />
          <Wrapper>
            <UserContainer>
              <Form onSubmit={onSubmit}>
                <Avatar>
                  {newPhotoURL ? (
                    <img src={newPhotoURL} />
                  ) : (
                    <img src={user.avatar} />
                  )}
                </Avatar>

                <Input type='file' accept='image/*' onChange={onFileChange} />
                <Input
                  type='text'
                  value={newName}
                  onChange={onNameChange}
                  placeholder={user.name}
                />
                <Button>프로필 편집 완료</Button>
              </Form>
              <Button logoutBtn onClick={onHandleLogout}>
                로그아웃
              </Button>
            </UserContainer>
          </Wrapper>
        </>
      )}
    </ProfileContainer>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  avatarChange: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

export default connect(mapStateToProps, {
  logout,
  avatarChange,
  profileChange,
  clearUserProfile,
  loadUser,
  setAlert,
})(Profile);
