import React from 'react';
import styled from 'styled-components';
// Component
import Header from '../Header/Header';
import CommentList from './CommentList';
import CommentPost from './CommentPost';

import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { GoTrashcan } from 'react-icons/go';

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

const PostPage = () => {
  return (
    <Container>
      <Header />
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
              <img src='data:image/jpeg;base64,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' />
            </Avatar>

            <UserAndTitle>
              정중식
              <span className='RPhNB'>•</span>
              <Title>today is very very Happy🥰🥰</Title>
            </UserAndTitle>
          </OneBox>
          <TwoBox>
            <Text>
              오늘 공차에서 블랙밀크티를 먹었다. 근데 아주 친절한 알바생이
              글쎄.. 사이즈업을 무료로 시켜주겠다잖아!? 난 너무좋은걸~🥰
            </Text>

            {/* to do: 좋아요 누를시 하트 색깔 변하게 */}
            {/* to do: 게시글 작성자가 아니면 휴지통이 안보이게 */}
            <AiOutlineHeart
              size='24'
              style={{ padding: '10px', cursor: 'pointer' }}
            />
            <GoTrashcan
              size='24'
              style={{ padding: '10px', cursor: 'pointer' }}
            />

            {/* 댓글 창 */}
            <CommentList />
          </TwoBox>
          {/* 댓글 입력창 */}
          <CommentPost />
        </ContentsBox>
      </Wrapper>
    </Container>
  );
};

export default PostPage;
