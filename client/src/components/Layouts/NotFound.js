import React, { Fragment } from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <h3>티 한잔의 여유를 가져볼까요?</h3>
    </NotFoundContainer>
  );
};

export default NotFound;
