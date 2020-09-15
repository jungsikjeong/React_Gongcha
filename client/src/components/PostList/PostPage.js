import React, { useEffect } from 'react';
import styled from 'styled-components';
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
import { readPost } from '../../actions/write';

/**
 * first 모바일 화면
 */

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
  padding: 16px;

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
  padding: 16px;
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

const PostPage = ({ match, readPost, write: { post, loading }, user }) => {
  const { id } = match.params;

  useEffect(() => {
    readPost(id);
  }, []);

  const isDelete = (user && user._id) === (post && post.user);

  return (
    <Container>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <ImageBox>
            <img
              src='https://cdn.crowdpic.net/list-thumb/thumb_l_728FDC99D5460B8CAD2B9BCB249C47E1.jpg'
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
              {isDelete && (
                <GoTrashcan
                  size='24'
                  style={{ marginRight: '20px', cursor: 'pointer' }}
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
};

const mapStateToProps = (state) => ({
  write: state.write,
  user: state.auth.user,
});

export default connect(mapStateToProps, { readPost })(withRouter(PostPage));
// const ownPost = (user && user._id) === (post && post.user._id);
