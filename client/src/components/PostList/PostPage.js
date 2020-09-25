import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Component
import Header from '../Header/Header';
import CommentList from './CommentList';
import CommentPost from './CommentPost';
import Loading from '../common/Loading';

// icons
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { GoTrashcan } from 'react-icons/go';

// images
import defaultImage from '../../assets/default3.png';

// actions
import { readPost, removePost, addLike, removeLike } from '../../actions/write';

/**
 * first 모바일 화면
 */

// 페이지 전환 효과
const ScreenFrames = keyframes`
 from{
  opacity:0.9;
  transform:translateY(-80px);
 }
 to{
  opacity:1;
  transform:translateY(0);
 }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  overflow: hidden;

  /* 데스크 탑 */
  @media (min-width: 1024px) {
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;

  /* 데스크 탑 */
  @media (min-width: 1024px) {
    flex-direction: row;
    /* padding-left: 1rem;
    padding-right: 1rem; */
    padding: 1rem;
    /* height: 100vh; */
    /* width: 1024px; */
    margin: 0 auto; /*중앙 정렬 */
    animation: ${ScreenFrames} 0.75s;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    flex: auto;
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    flex-basis: 33.3%;
  }
`;

const ContentsBox = styled.div`
  height: 100%;
  color: #fff;

  /* 데스크 탑 */
  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

const OneBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  font-size: 0.9rem;
  color: #fff;
  line-height: 1.5;
  padding: 16px 16px 10px 16px;

  .icon-like {
    /* 데스크 탑 */
    @media (min-width: 1024px) {
      margin-right: 0;
      cursor: pointer;
      margin-left: auto;
    }

    padding: 10px;
    margin-right: 10px;
    margin-left: auto;
    cursor: pointer;
  }
`;

const TwoBox = styled.div`
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.5;
  padding: 0px 16px 16px 16px;
  height: 15rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 1px;
    background: 0 0;
  }
`;

const Avatar = styled.div`
  /* 모바일 버전에선 비활성화 */
  display: none;
  margin: 0;

  /* 데스크 탑 */
  @media (min-width: 1024px) {
    display: block;
    width: 32px;
    height: 32px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

const UserAndTitle = styled.div`
  .RPhNB {
    color: #fff;
    margin-left: 4px;
    margin-right: 4px;
  }

  /* 데스크 탑 */
  @media (min-width: 1024px) {
    margin-left: 17px;
  }
`;

const Title = styled.span`
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 6px;
`;

const Text = styled.div``;

const PostPage = ({
  match,
  readPost,
  removePost,
  addLike,
  removeLike,
  history,
  write: { post, loading },
  user,
}) => {
  const { id } = match.params;

  useEffect(() => {
    readPost(id);
  }, [readPost, id]);

  const isDelete = (user && user._id) === (post && post.user._id);

  const isLike =
    user &&
    post &&
    post.likes.map((like) => (like.user === user._id ? true : false));

  const onHandleRemove = () => {
    removePost(id, history);
  };

  const onPostLike = (e) => {
    if (!user) {
      alert('로그인을 해주세요!');
    }
    addLike(id);
  };

  const onPostUnLike = (e) => {
    if (!user) {
      alert('로그인을 해주세요!');
    }

    removeLike(id);
  };

  return (
    <Container>
      <Header />
      {post === null ? (
        <Loading />
      ) : (
        <Wrapper>
          <ImageBox>
            {post.image ? (
              <img src={`http://localhost:5000/${post.image}`} alt='' />
            ) : (
              <img src={defaultImage} alt='' />
            )}
          </ImageBox>
          <ContentsBox>
            <OneBox>
              {/* 모바일 버전에서는 비활성화됨 */}
              <Avatar>
                <img src={`http://localhost:5000/${post.user.avatar}`} />
              </Avatar>

              <UserAndTitle>
                {post.user.name}
                <span className='RPhNB'>•</span>
                <span>{post.date.slice(0, 10)}</span>
              </UserAndTitle>

              {/* to do: 좋아요 누를시 하트 색깔 변하게 */}
              {/* likes[ user 정보가 담기니까 이안에 user.id가있다면 하트 색깔^^] */}
              {/* 좋아요를 눌렀다면 하트 색깔이 칠해진 아이콘 */}

              {user && post.likes.length > 0 && isLike ? (
                // 좋아요 눌러져있을시 빨간하트 표시
                <AiFillHeart
                  onClick={onPostUnLike}
                  size='24'
                  className='icon-like'
                  style={{ color: '#ff6b6b' }}
                />
              ) : (
                // 좋아요 안눌러져있을시 흰색하트 표시
                <AiOutlineHeart
                  onClick={onPostLike}
                  size='24'
                  className='icon-like'
                />
              )}

              {/* 로그인한 사용자와 포스트작성자가 일치하면 삭제 버튼 나타남 */}
              {isDelete && (
                <GoTrashcan
                  size='24'
                  style={{ marginRight: '20px', cursor: 'pointer' }}
                  onClick={onHandleRemove}
                />
              )}
            </OneBox>
            <TwoBox>
              <Text>{post.text}</Text>

              {/* 댓글 창 */}
              <CommentList />
            </TwoBox>
            {/* 댓글 입력창 */}
            <CommentPost />
          </ContentsBox>
        </Wrapper>
      )}
    </Container>
  );
};

PostPage.propTypes = {
  write: PropTypes.object.isRequired,
  user: PropTypes.object,
  readPost: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  write: state.write,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  readPost,
  removePost,
  addLike,
  removeLike,
})(withRouter(PostPage));
