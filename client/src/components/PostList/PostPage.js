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
import { FcLike } from 'react-icons/fc';
import { GoTrashcan } from 'react-icons/go';
// actions
import { readPost, removePost } from '../../actions/write';

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
  history,
  write: { post, loading },
  user,
}) => {
  const { id } = match.params;

  useEffect(() => {
    readPost(id);
  }, [readPost, id]);

  const isDelete = (user && user._id) === (post && post.user);

  const onHandleRemove = () => {
    removePost(id, history);
  };

  return (
    <Container>
      <Header />
      {post === null ? (
        <Loading />
      ) : (
        <Wrapper>
          <ImageBox>
            <img
              src='data:image/jpeg;base64,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'
              alt='views'
            />
          </ImageBox>
          <ContentsBox>
            <OneBox>
              {/* 모바일 버전에서는 비활성화됨 */}
              <Avatar>
                <img src={post.avatar} />
              </Avatar>

              <UserAndTitle>
                {post.name}
                <span className='RPhNB'>•</span>
                {/* <Title>today is very very Happy🥰🥰</Title> */}
                <span>{post.date.slice(0, 10)}</span>
              </UserAndTitle>

              {/* to do: 좋아요 누를시 하트 색깔 변하게 */}
              <AiOutlineHeart size='24' className='icon-like' />

              {/* 로그인한 사용자와 포스트작성자가 일치하면 나타남 */}
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
};

const mapStateToProps = (state) => ({
  write: state.write,
  user: state.auth.user,
});

export default connect(mapStateToProps, { readPost, removePost })(
  withRouter(PostPage)
);
// const ownPost = (user && user._id) === (post && post.user._id);
