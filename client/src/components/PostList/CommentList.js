import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  removeComment,
  addCommentLike,
  removeCommentLike,
} from '../../actions/write';
import { connect } from 'react-redux';

import { FcLike } from 'react-icons/fc';
import { GoTrashcan } from 'react-icons/go';

// Component
import CommentStepPost from './CommentStepPost';
import CommentStepList from './CommentStepList';

const Container = styled.div`
  width: 100%;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 16px 16px 10px 0px;
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
      h3 {
        font-size: 1rem;
      }
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

const CommentStepContainer = styled.div`
  margin-left: 3rem;

  .comment_step_line {
    border-bottom: 1px solid rgba(142, 142, 142, 1);
    display: inline-block;
    height: 0;
    margin-right: 16px;
    vertical-align: middle;
    width: 24px;
  }

  button {
    border: 0;
    color: #0095f6;
    color: rgba(0, 149, 246, 1);
    display: inline;
    padding: 0;
    position: relative;
    outline: none;
    cursor: pointer;
    background: 0 0;

    span {
      color: #8e8e8e;
      font-size: 12px;
      font-weight: 600;
      line-height: 14px;
    }
  }
`;

const CommentList = ({
  comment,
  id,
  removeComment,
  addCommentLike,
  removeCommentLike,
  user,
}) => {
  const [commentOpenToggle, setCommentOpenToggle] = useState(false);
  const [commentStepOpenToggle, setCommentStepOpenToggle] = useState(false);

  const onCommentOpenToggle = () => {
    setCommentOpenToggle(!commentOpenToggle);
  };

  const onRemoveComment = (commentId) => {
    removeComment(id, commentId);
  };

  const onCommentStepOpenToggle = () => {
    setCommentStepOpenToggle(!commentStepOpenToggle);
  };

  return (
    <Container>
      <Wrapper key={comment._id}>
        <ImageBox>
          <Avatar>
            {comment.user.avatar && (
              <img src={`http://localhost:5000/${comment.user.avatar}`} />
            )}
          </Avatar>
        </ImageBox>
        <Contents>
          <div className='content-box'>
            <span className='comment-text'>
              {comment.user.name && (
                <Link to='#'>
                  <h3 className='user-name'>{comment.user.name}</h3>
                </Link>
              )}

              {comment.text}
            </span>
          </div>
          <SubContents>
            <SubContentBox>
              {comment.likes.length > 0 ? (
                <span>좋아요 {comment.likes.length}개</span>
              ) : (
                ''
              )}

              <button onClick={onCommentOpenToggle}>답글 달기</button>
            </SubContentBox>
          </SubContents>
        </Contents>

        <CommentRemove className='comment-remove'>
          {user && user._id === comment.user._id && (
            <GoTrashcan onClick={(e) => onRemoveComment(comment._id)} />
          )}
        </CommentRemove>

        {user &&
        comment &&
        comment.likes.filter((like) => like.user === user._id).length > 0 ? (
          // 좋아요 눌러져있을시 빨간하트 표시
          <LikeButton>
            <FcLike onClick={(e) => removeCommentLike(id, comment._id)} />
          </LikeButton>
        ) : (
          // 좋아요 안눌러져있을시 흰색하트 표시
          <LikeButton>
            <AiOutlineHeart onClick={(e) => addCommentLike(id, comment._id)} />
          </LikeButton>
        )}
      </Wrapper>

      {comment.commentsStep.map((commentStep) =>
        commentStepOpenToggle ? (
          <CommentStepContainer
            key={commentStep._id}
            onClick={onCommentStepOpenToggle}
          >
            <button>
              <div className='comment_step_line'></div>
              <span>답글 숨기기</span>
            </button>
          </CommentStepContainer>
        ) : (
          <CommentStepContainer
            key={commentStep._id}
            onClick={onCommentStepOpenToggle}
          >
            <button>
              <div className='comment_step_line'></div>
              <span>답글 보기(1개)</span>
            </button>
          </CommentStepContainer>
        )
      )}

      {commentStepOpenToggle && (
        <>
          {/* 대댓글 리스트 */}
          {comment.commentsStep.map((commentStep) => (
            <CommentStepList
              commentStep={commentStep}
              id={id}
              user={user}
              key={commentStep._id}
            />
          ))}
        </>
      )}

      {/* 대댓글 입력창*/}
      {commentOpenToggle && (
        <CommentStepPost
          id={id}
          commentId={comment._id}
          comment={comment}
          setCommentOpenToggle={setCommentOpenToggle}
        />
      )}
    </Container>
  );
};
CommentList.propTypes = {
  removeComment: PropTypes.func.isRequired,
  addCommentLike: PropTypes.func.isRequired,
  removeCommentLike: PropTypes.func.isRequired,
};

export default connect(null, {
  removeComment,
  addCommentLike,
  removeCommentLike,
})(CommentList);

// {commentStepOpenToggle ? (
//   <>
//     {/* 대댓글 리스트 */}
//     {comment.commentsStep.map((commentStep) => (
//       <CommentStepList
//         commentStep={commentStep}
//         id={id}
//         user={user}
//         key={commentStep._id}
//       />
//     ))}
//   </>
// ) : (
//   <CommentStepContainer>
//     <button>
//       <div className='comment_step_line'></div>
//       <span>답글 보기(1개)</span>
//     </button>
//   </CommentStepContainer>
// )}
