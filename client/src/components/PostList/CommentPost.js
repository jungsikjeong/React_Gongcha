import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  line-height: 18px;
  min-height: 56px;

  /* display:flex; */
`;

const Wrapper = styled.div``;

const Form = styled.form`
  /* box-align: center; */
  display: flex;
  align-items: center;
  flex: 1;
`;

const TextArea = styled.textarea`
  color: #8e8e8e;
  background: 0 0;
  border: 0;
  display: flex;
  flex-grow: 1;
  box-flex: 1;
  max-height: 80px;
  outline: 0;
  padding: 0;
  resize: none;
  font-size: 0.9rem;
`;

const Button = styled.button`
  border: 0;
  outline: none;
  font-size: 0.9rem;
  line-height: 18px;
  padding: 0;
  color: #c5e7fd;
  background: 0 0;
`;

const CommentPost = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <TextArea
            aria-label='댓글 달기...'
            placeholder='댓글 달기...'
            autoComplete='off'
            autoCorrect='off'
          />
          <Button>게시</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default CommentPost;
