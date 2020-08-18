import React from 'react';
import styled from 'styled-components';

// Components
import LeftSideBar from './LeftSideBar';
import Header from '../Header/Header';

const RecipeContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
`;

const Recipe = () => {
  return (
    <RecipeContainer>
      <Header />
      <LeftSideBar />
    </RecipeContainer>
  );
};

export default Recipe;
