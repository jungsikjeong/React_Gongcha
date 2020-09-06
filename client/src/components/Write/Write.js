import React, { useState, Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import Button from '../../components/common/Button';
import { logout } from '../../actions/auth';
import { writePageOn } from '../../actions/write';
import { writePageClose } from '../../actions/write';
import { PictureFilled } from '@ant-design/icons';
import Header from '../Header/Header';

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
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${ScreenFrames} 0.75s;

  .writeHeader {
    width: 50%;
    border-bottom: 1px solid green;
    text-align: center;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const TextArea = styled.textarea`
  outline: none;
  border: none;
  background: 0 0;
  color: #fff;
  resize: none;
  font-size: 1.1rem;
  width: 50%;
  height: 50vh;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonStyle = styled(Button)`
  border: 0;
  outline: none;
  font-size: 1.2rem;
  line-height: 18px;
  padding: 0;
  color: #c5e7fd;
  background: 0 0;

  :hover {
    color: #0095f7;
  }

  ${(props) =>
    props.cancel &&
    css`
      margin-right: 16px;

      :hover {
        color: #c30e2e;
      }
    `}
`;

const Contents = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  align-items: center;

  .action-btn {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Write = ({ user, isAuthenticated }) => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <div className='writeHeader'>
          <h1>오늘의 공차 만들기</h1>
        </div>

        <Form>
          <TextArea placeholder='오늘 어떤 공차를 하셨나요?' />
        </Form>

        <Contents>
          <PictureFilled
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              color: '#08c',
              padding: '10px',
              border: '1px solid #8e8e8e',
              borderRadius: '4px',
            }}
          />
          <div className='action-btn'>
            <ButtonStyle cancel>취소</ButtonStyle>
            <ButtonStyle>등록</ButtonStyle>
          </div>
        </Contents>
      </Wrapper>
    </Container>
  );
};

Write.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  logout,
})(Write);
