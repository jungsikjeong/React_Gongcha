import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/write';

// components
import Header from '../Header/Header';
import Loading from '../common/Loading';
import Alert from '../../components/common/Alert';

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
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq6MvximRKiu0XTDp7J2omL4ZgOT6zMzseIg&usqp=CAU' />
                <figcaption>{post.text}</figcaption>
              </figure>
            </Link>
          ))}
          <Link to='/postPage'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq6MvximRKiu0XTDp7J2omL4ZgOT6zMzseIg&usqp=CAU' />
              <figcaption>
                <p>테스트1</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh2TM-trBZcxJMFJm-mLFkloU2HDHHkZzZXQ&usqp=CAU' />
              <figcaption>
                <p>테스트2</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=2018052309411600967fd4d2b07dc12114162187.jpg' />
              <figcaption>
                <p>테스트3</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhR9_x9NyLSp1VXFtwTbZOU-mHADy8heQNfg&usqp=CAU' />
              <figcaption>
                <p>테스트4</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>
          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCINfG09lpCiQQWSgzppcxubNh643jbqoEVA&usqp=CAU' />
              <figcaption>
                <p>테스트5</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdvXcKyxJVuTL0ExD32a2daSWSn6TgPhiugA&usqp=CAU' />
              <figcaption>
                <p>테스트6</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx7epj1rwmX5A9k2XOH6vHhmpErIPEbZITVA&usqp=CAU' />
              <figcaption>
                <p>테스트7</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTtoNEEKROdvsObn6oRIv1aUUKvldDdu4Paw&usqp=CAU' />
              <figcaption>
                <p>테스트8</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS417N_I3kJuQqLXHbUTu0kbXMLP9TY2xLodw&usqp=CAU' />
              <figcaption>
                <p>테스트9</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5qhZ5UfXeqrkn-cSsB483oyb6ADrlV1xQ-g&usqp=CAU' />
              <figcaption>
                <p>테스트</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzUQ52Yd97u08XWbNNuGmwiSYfUttNfcGerA&usqp=CAU' />
              <figcaption>
                <p>테스트</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1IfH0uOhF2eHmF8dVXkcXO9hO5jfQIHfAw&usqp=CAU' />
              <figcaption>
                <p>테스트</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>

          <Link to='#'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMgUKaLHWTgg6zcVcM4GBsijBA3nyanRCQ0w&usqp=CAU' />
              <figcaption>
                <p>테스트</p>
                Cinderella wearing European fashion of the mid-1860’s
              </figcaption>
            </figure>
          </Link>
        </Columns>
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
