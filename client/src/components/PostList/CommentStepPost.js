import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { addComment, removeComment, addStepComment } from '../../actions/write';

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
  color: #fff;
  background: 0 0;
  border: 0;
  display: flex;
  flex-grow: 1;
  box-flex: 1;
  max-height: 80px;
  outline: 0;
  padding: 0.1rem 0;
  resize: none;
  font-size: 0.9rem;

  ::placeholder {
    color: #8e8e8e;
  }
`;

const Button = styled.button`
  border: 0;
  outline: none;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 18px;
  padding: 0;
  color: #c5e7fd;
  background: 0 0;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: #0095f6;
    `}
`;

const CommentStepPost = ({
  setCommentOpenToggle,
  addComment,
  addStepComment,
  removeComment,
  commentId,
  id,
}) => {
  const [text, setText] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    addStepComment(id, commentId, { text });

    setText('');
    setCommentOpenToggle(false);
  };

  useEffect(() => {
    if (text) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [text]);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <TextArea
            aria-label='댓글 달기...'
            placeholder='댓글 달기...'
            autoComplete='off'
            autoCorrect='off'
            onChange={onChange}
            value={text}
          />
          <Button active={activeBtn}>게시</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

CommentStepPost.propTypes = {
  addComment: PropTypes.func.isRequired,
  addStepComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment, removeComment, addStepComment })(
  CommentStepPost
);
