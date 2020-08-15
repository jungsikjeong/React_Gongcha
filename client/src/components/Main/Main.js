import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';

import baImage from '../../assets/background.jpg';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url(${baImage});
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  position: relative;
`;

const Main = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Main;
