import React, { useEffect, useState, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bgImage from '../../assets/background.jpg';
import WOW from 'wowjs';

import MainFooter from '../Layouts/MainFooter';
import Header from '../Header/Header';
import Loading from '../common/Loading';
import Alert from '../common/Alert';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url(${bgImage});
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  position: relative;
`;

const BannerTitle = styled.div`
  margin: 80px 130px;
  color: #fff;

  h1 {
    font-size: 64px;
    margin-bottom: 30px;
    letter-spacing: -5px;
    font-weight: bold;

    .textColor {
      color: #cf3e58;
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    margin: 80px 0 80px 0;

    h1 {
      font-size: 50px;
      letter-spacing: -5px;
    }
  }
`;

const Main = ({ auth: { loading } }) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Container>
      {loading && loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Alert />
          <Header />
          <BannerTitle>
            <h1
              className='wow fadeIn'
              data-wow-iteration='1'
              data-wow-delay='1.5s'
            >
              <span className='textColor'>Tea</span> 로 시작하는 <br />
              <span className='textColor'>The</span>{' '}
              {/* <span style={{ letterSpacing: '-.7rem' }}>기분 좋은 아침!</span> */}
              기분 좋은 아침!
            </h1>
            {/* <Button>EXPLORE</Button> */}

            <MainFooter />
          </BannerTitle>
        </Fragment>
      )}
    </Container>
  );
};

Main.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Main);
