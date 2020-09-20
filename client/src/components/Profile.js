import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { avatarChange, profileChange } from '../actions/users';
import PropTypes from 'prop-types';

// components
import Header from './Header/Header';
import Button from '../components/common/Button';
import Loading from './common/Loading';

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

const Span = styled.span`
  color: white;
`;

const Profile = ({
  auth: { user, loading },
  users: { userAvatarUrl },
  history,
  logout,
  avatarChange,
  profileChange,
}) => {
  const [newPhotoURL, setNewPhotoURL] = useState('');

  const onHandleLogout = () => {
    logout(history);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;

    // 파일을 서버에 전송하기위한것
    const formData = new FormData();

    formData.append('file', files[0]);

    avatarChange(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      avatar: newPhotoURL,
    };

    profileChange(body);
  };

  // 프로필 이미지 변경시 화면에 띄워줌
  useEffect(() => {
    setNewPhotoURL(userAvatarUrl);
  }, [userAvatarUrl]);

  return (
    <ProfileContainer>
      <Header />

      {/* to do:: 자기가 쓴 게시글 목록들 가져오기 */}
      {/* to do:: 프로필 사진 편집 기능 */}
      {/* to do:: 유저 이름 변경 기능 */}

      {loading ? (
        <Loading />
      ) : (
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
              <Button>프로필 편집 완료</Button>
            </Form>
            <Button logoutBtn onClick={onHandleLogout}>
              로그아웃
            </Button>
          </UserContainer>
        </Wrapper>
      )}
    </ProfileContainer>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  avatarChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

export default connect(mapStateToProps, {
  logout,
  avatarChange,
  profileChange,
})(Profile);
