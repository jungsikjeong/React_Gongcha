import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { connect } from 'react-redux';
import { userProfile } from '../../actions/users';

// Components
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

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

const UserProfileContainer = styled.div`
  background: #000;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${ScreenFrames} 0.75s;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-top: 0.5rem;
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

const CardList = styled.ul`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto; /* 중앙 정렬 */
`;

const CardItem = styled.li`
  display: inline-block;
  width: 33.3333%;
  margin-top: 1rem;

  .card-item-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const CardDesc = styled.div`
  flex: 1 1 auto;
  padding: 1em;
`;

const SLink = styled(Link)`
  img {
    width: 300px;
  }

  :hover {
    color: #fff;
  }
`;

const UserProfile = ({ match, userProfile, users: { userProfileList } }) => {
  const { id } = match.params;

  // const { avatar, name } = userProfileList;

  useEffect(() => {
    userProfile(id);
  }, [userProfile, id]);

  return (
    <UserProfileContainer>
      <Header />

      <Wrapper>
        <UserContainer>
          <Avatar>
            {userProfileList && (
              <img
                src={`http://localhost:5000/${userProfileList.avatar}`}
                alt=''
              />
            )}
          </Avatar>

          <h2>{userProfileList.name}</h2>
        </UserContainer>
        ⋮<span>여태 기록한 공차 목록들</span>⋮
        <CardList>
          {userProfileList
            ? userProfileList.posts.map((post) => (
                <CardItem key={post._id}>
                  <div className='card-item-div'>
                    <SLink to={`/postpage/${post._id}`}>
                      <img src={`http://localhost:5000/${post.image}`} alt='' />

                      <CardDesc>{post.text}</CardDesc>
                    </SLink>
                  </div>
                </CardItem>
              ))
            : ''}
        </CardList>
      </Wrapper>
    </UserProfileContainer>
  );
};

UserProfile.propTypes = {
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { userProfile })(UserProfile);
