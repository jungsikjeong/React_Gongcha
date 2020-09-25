import React, { useState, Fragment, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import Button from '../../components/common/Button';
import { logout } from '../../actions/auth';
import { writePost } from '../../actions/write';
import { PictureFilled } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

// components
import Header from '../Header/Header';
import Alert from '../common/Alert';
import FileUpload from './FileUpload';

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
  flex-direction: column;
  margin-top: 10px;

  .actionBox {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const TextArea = styled.textarea`
  outline: none;
  border: none;
  background: 0 0;
  color: #fff;
  resize: none;
  font-size: 1.1rem;
  width: 50%;
  /* height: 50vh; */
  height: 240px;
  padding: 10px;

  ${(props) =>
    props.file &&
    css`
      /* 이미지가 추가되면 높이를 낮춤 */
      height: 150px;
    `}

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

const ImageBox = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  img {
    width: 300px;
    height: 240px;
  }
`;

const Write = ({ write: { image }, isAuthenticated, writePost, history }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      text,
      image,
    };

    writePost({ body, history });
  };

  return (
    <Container>
      <Header />
      <Alert />
      <Wrapper>
        <div className='writeHeader'>
          <h1>오늘의 공차 만들기</h1>
        </div>

        <Form onSubmit={onSubmit}>
          <TextArea
            placeholder='오늘 어떤 공차를 하셨나요? (최소 25글자로 작성해주세요!)'
            onChange={onChange}
            value={text}
            file={image ? 1 : 0}
          />
          {image && (
            <ImageBox>
              <img src={image} alt='' />
            </ImageBox>
          )}

          <div className='actionBox'>
            <FileUpload />

            <ButtonStyle cancel>취소</ButtonStyle>
            <ButtonStyle>등록</ButtonStyle>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

Write.propTypes = {
  write: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  writePost: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  write: state.write,
});

export default connect(mapStateToProps, {
  writePost,
})(withRouter(Write));
