import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';
// components
import Header from './Header';
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

const Avatar = styled.div`
  width: 7rem;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  background: red;
`;

const Span = styled.span`
  color: white;
`;

const Profile = ({ auth: { user, loading }, history, logout }) => {
  const onClick = () => {
    logout(history);
  };

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
            <Avatar>
              <img src={user.avatar} />
            </Avatar>
            <StyledButton onClick={onClick}>로그아웃</StyledButton>
          </UserContainer>
        </Wrapper>
      )}
    </ProfileContainer>
  );
};

Profile.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Profile);
