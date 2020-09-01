import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Header';

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
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;
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
`;

const ToPContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  font-size: 0.9rem;
  color: #fff;
  line-height: 1.5;
  padding: 10px;
`;

const Avatar = styled.div`
  /* 모바일 버전에선 비활성화 */
  display: none;
`;

const UserAndTitle = styled.div``;

const Title = styled.span`
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 6px;
`;

const BottomContent = styled.div`
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.5;
  padding: 10px;
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
          <ToPContent>
            {/* 모바일 버전에서는 비활성화됨 */}
            <Avatar>Avatar</Avatar>

            <UserAndTitle>
              정중식
              <Title>today is very very Happy🥰🥰</Title>
            </UserAndTitle>
          </ToPContent>

          <BottomContent>
            <Text>
              오늘 공차에서 블랙밀크티를 먹었다. 근데 아주 친절한 알바생이
              글쎄.. 사이즈업을 무료로 시켜주겠다잖아!? 난 너무좋은걸~🥰
            </Text>
          </BottomContent>
        </ContentsBox>
      </Wrapper>

      <Wrapper>
        <ImageBox>
          <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg' />
        </ImageBox>
        <ContentsBox>
          <ToPContent>
            {/* 모바일 버전에서는 비활성화됨 */}
            <Avatar>Avatar</Avatar>

            <UserAndTitle>
              정중식
              <Title>today is very very Happy🥰🥰</Title>
            </UserAndTitle>
          </ToPContent>

          <BottomContent>
            <Text>
              오늘 공차에서 블랙밀크티를 먹었다. 근데 아주 친절한 알바생이
              글쎄.. 사이즈업을 무료로 시켜주겠다잖아!? 난 너무좋은걸~🥰
            </Text>
          </BottomContent>
        </ContentsBox>
      </Wrapper>

      <Wrapper>
        <ImageBox>
          <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg' />
        </ImageBox>
        <ContentsBox>
          <ToPContent>
            {/* 모바일 버전에서는 비활성화됨 */}
            <Avatar>Avatar</Avatar>

            <UserAndTitle>
              정중식
              <Title>today is very very Happy🥰🥰</Title>
            </UserAndTitle>
          </ToPContent>

          <BottomContent>
            <Text>
              오늘 공차에서 블랙밀크티를 먹었다. 근데 아주 친절한 알바생이
              글쎄.. 사이즈업을 무료로 시켜주겠다잖아!? 난 너무좋은걸~🥰
            </Text>
          </BottomContent>
        </ContentsBox>
      </Wrapper>
    </Container>
  );
};

export default PostPage;
