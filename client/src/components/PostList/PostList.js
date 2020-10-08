import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/write';

import defaultImage from '../../assets/default3.png';

// components
import Header from '../Header/Header';
import Loading from '../common/Loading';
import Alert from '../../components/common/Alert';
import { useState } from 'react';

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
  min-height: 100vh;
  background: #000;
  overflow: hidden;
`;

const Columns = styled.div`
  column-width: 320px;
  column-gap: 15px;
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
  animation: ${ScreenFrames} 0.75s;

  figure {
    display: inline-block;
    /* border: 1px solid rgba(0, 0, 0, 0.2); */
    border: 0.5px solid #777;
    border-radius: 10px;
    margin: 0;
    margin-bottom: 15px;
    padding: 15px;
    overflow: hidden;
    /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */
    /* box-shadow: 0px 5px 7px 1px rgba(0, 10, 20, 0.14); */

    @media (max-width: 768px) {
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      transition: transform 1s;

      :hover {
        transform: scale(1.1);
        /* transform: translateY(-6px);
      transition: all 200ms; */
      }
    }

    figcaption {
      font-size: 0.9rem;
      color: #999;
      line-height: 1.5;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      padding: 10px;
      margin-top: 12px;

      p {
        color: #fff;
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }

  /* @media screen and (max-width: 750px) {
    column-gap: 0px;
    width: 100%;
  } */
`;

const PostList = ({ write: { posts, loading }, getAllPosts }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <Container>
      <Header />
      <Alert />

      {posts === null || loading ? (
        <Loading />
      ) : (
        <Columns>
          {posts.map((post) => (
            <Link to={`/postpage/${post._id}`} key={post._id}>
              <figure>
                {post.image ? (
                  <img src={post.image} alt='' />
                ) : (
                  <img src={defaultImage} alt='' />
                )}
                <figcaption>{post.text}</figcaption>
              </figure>
            </Link>
          ))}
        </Columns>
      )}
      {posts.length === 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1rem',
          }}
        >
          게시글이 없어요.. 첫 게시글의 주인공이 되어보실까요?🙄
        </div>
      )}
    </Container>
  );
};

PostList.propTypes = {
  write: PropTypes.object.isRequired,
  getAllPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  write: state.write,
});

export default connect(mapStateToProps, { getAllPosts })(PostList);
