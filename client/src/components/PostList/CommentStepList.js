import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  removeCommentStep,
  addCommentStepLike,
  removeCommentStepLike,
} from '../../actions/write';
import { connect } from 'react-redux';

import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { GoTrashcan } from 'react-icons/go';

const Container = styled.div`
  margin-left: 3rem;
  width: 90%;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 16px 16px 16px 0px;
  align-items: center;

  :hover {
    .comment-remove {
      opacity: 1;
    }
  }
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 13px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Contents = styled.div`
  width: 100%;

  .content-box {
    display: flex;
    align-items: center;

    .user-name {
      display: inline;
      font-size: 0.875rem;
      margin-right: 0.2rem;
      font-weight: 600;
    }

    .comment-text {
      font-size: 0.875rem;
    }
  }
`;

const SubContents = styled.div`
  span {
    line-height: 14px;
    font-size: 12px;
    font-weight: 400;
    margin-right: 12px;
    color: #808080;
  }

  button {
    background: 0 0;
    border: 0;
    color: #808080;
    cursor: pointer;
    display: inline;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    margin-right: 12px;
    padding: 0;
  }
`;

const SubContentBox = styled.div``;

const CommentRemove = styled.div`
  opacity: 0;
  cursor: pointer;
  margin-right: 15px;

  :hover {
    color: #ff6b6b;
  }

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const LikeButton = styled.div`
  cursor: pointer;

  :hover {
    color: red;
  }
`;

const CommentStepList = ({
  commentStep,
  id,
  user,
  removeCommentStep,
  addCommentStepLike,
  removeCommentStepLike,
}) => {
  const onRemoveComment = (commentStepId) => {
    removeCommentStep(id, commentStepId);
  };

  return (
    <Container>
      {commentStep && (
        <Wrapper>
          <ImageBox>
            <Avatar>
              {commentStep.user.avatar && <img src={commentStep.user.avatar} />}
            </Avatar>
          </ImageBox>
          <Contents>
            <div className='content-box'>
              <span className='comment-text'>
                {commentStep.user.name && (
                  <Link to={`/userProfile/${commentStep.user._id}`}>
                    <h3 className='user-name'>{commentStep.user.name}</h3>
                  </Link>
                )}

                {commentStep.text}
              </span>
            </div>
            <SubContents>
              <SubContentBox>
                {commentStep.likes.length > 0 ? (
                  <span>좋아요 {commentStep.likes.length}개</span>
                ) : (
                  ''
                )}
              </SubContentBox>
            </SubContents>
          </Contents>

          <CommentRemove className='comment-remove'>
            {user && user._id === commentStep.user._id && (
              <GoTrashcan onClick={(e) => onRemoveComment(commentStep._id)} />
            )}
          </CommentRemove>

          {user &&
          commentStep &&
          commentStep.likes.filter((like) => like.user === user._id).length >
            0 ? (
            // 좋아요 눌러져있을시 빨간하트 표시
            <LikeButton>
              <FcLike
                onClick={(e) => removeCommentStepLike(id, commentStep._id)}
              />
            </LikeButton>
          ) : (
            // 좋아요 안눌러져있을시 흰색하트 표시
            <LikeButton>
              <AiOutlineHeart
                onClick={(e) => addCommentStepLike(id, commentStep._id)}
              />
            </LikeButton>
          )}
        </Wrapper>
      )}
    </Container>
  );
};
CommentStepList.propTypes = {
  removeCommentStep: PropTypes.func.isRequired,
  addCommentStepLike: PropTypes.func.isRequired,
  removeCommentStepLike: PropTypes.func.isRequired,
};

export default connect(null, {
  removeCommentStep,
  addCommentStepLike,
  removeCommentStepLike,
})(CommentStepList);
