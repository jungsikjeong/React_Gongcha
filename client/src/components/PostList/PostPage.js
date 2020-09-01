import React from 'react';
import styled from 'styled-components';
// Component
import Header from '../Header';
import CommentList from './CommentList';
import CommentPost from './CommentPost';

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
    /* padding: 1rem; */
    width: 1024px;
    margin: 0 auto; /*중앙 정렬 */
  }
`;

const ImageBox = styled.div`
  margin: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentsBox = styled.div`
  /* width: 25%; */
  width: 100%;
  color: #fff;

  /* 데스크 탑 */
  @media (min-width: 1024px) {
    width: 40%;
    /* background: #fff; */
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

  @media (min-width: 1024px) {
  }
`;

const TwoBox = styled.div`
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.5;
  padding: 16px;
`;

const Avatar = styled.div`
  /* 모바일 버전에선 비활성화 */
  display: none;

  /* 데스크 탑 */
  @media (min-width: 1024px) {
    display: block;
    width: 50px;
    height: 50px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

const UserAndTitle = styled.div`
  width: 100%;

  .RPhNB {
    /* color: rgba(var(--i1d, 38, 38, 38), 1); */
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
          <img src='https://img.insight.co.kr/static/2018/08/23/700/y1nqb8b8gpb4hv83o699.jpg' />
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
          </TwoBox>

          {/* 댓글 창 */}
          <CommentList />

          {/* 댓글 입력창 */}
          <CommentPost />
        </ContentsBox>
      </Wrapper>
    </Container>
  );
};

export default PostPage;
