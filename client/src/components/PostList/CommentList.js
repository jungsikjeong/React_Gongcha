import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { removeComment } from '../../actions/write';
import { connect } from 'react-redux';

// 이후 좋아요 누를시 보여줄 하트
import { FcLike } from 'react-icons/fc';

const Container = styled.div`
  width: 100%;
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

const CommentList = ({ post, id, removeComment, user }) => {
  const [commentOpenToggle, setCommentOpenToggle] = useState(false);

  const onCommentOpenToggle = () => {
    setCommentOpenToggle(!commentOpenToggle);
  };

  const onRemoveComment = (commentId) => {
    removeComment(id, commentId);
  };

  return (
    <Container>
      {post.comments.map((comment) => (
        <Wrapper key={comment._id}>
          <ImageBox>
            <Avatar>
              <img src={`http://localhost:5000/${comment.user.avatar}`} />
            </Avatar>
          </ImageBox>
          <Contents>
            <div className='content-box'>
              <span className='comment-text'>
                <Link to='#'>
                  <h3 className='user-name'>{comment.user.name}</h3>
                </Link>

                {comment.text}
              </span>
            </div>
            <SubContents>
              <SubContentBox>
                {/* to do:: list && <span좋아요2개</span> */}
                <span>좋아요 2개</span>
                <button onClick={onCommentOpenToggle}>답글 달기</button>
              </SubContentBox>
            </SubContents>
          </Contents>

          <CommentRemove className='comment-remove'>
            {user && user._id === comment.user._id && (
              <GoTrashcan onClick={(e) => onRemoveComment(comment._id)} />
            )}
          </CommentRemove>

          {/* 좋아요 버튼 */}
          <LikeButton>
            <AiOutlineHeart />
          </LikeButton>
        </Wrapper>
      ))}
    </Container>
  );
};
CommentList.propTypes = {
  removeComment: PropTypes.func.isRequired,
};

export default connect(null, { removeComment })(CommentList);
