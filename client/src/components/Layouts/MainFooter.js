import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import smallImage from '../../assets/small-img.jpg';

const MainFooterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  right: 0;
  bottom: 0;
  position: absolute;
  background: yellow;
`;

const Contents = styled.div`
  flex-basis: 50%;
  padding: 10px;
  color: #000;

  p {
    text-align: right;
    margin-top: 10px;
  }
`;

const Image = styled.div`
  flex-basis: 50%;
  /* 이미지 꽉 채우기위해서 사용 */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const SLink = styled(Link)`
  color: #000;
  font-size: 13px;
  margin: 0 10px;
`;

const MainFooter = () => {
  return (
    <MainFooterContainer>
      <Contents>
        <small>
          공차는 세련되고 전문적인 모습으로 새로워지고 있습니다.
          <p>
            <SLink to='#'>PREV</SLink>
            <SLink to='#'>NEXT</SLink>
          </p>
        </small>
      </Contents>
      <Image>
        <img src={smallImage} alt='views' />
      </Image>
    </MainFooterContainer>
  );
};

export default MainFooter;
