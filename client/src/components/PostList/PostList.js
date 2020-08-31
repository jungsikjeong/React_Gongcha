import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Header';
import { Link } from 'react-router-dom';

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

    img {
      width: 100%;
      height: auto;
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

const PostList = () => {
  return (
    <Container>
      <Header />
      <Columns>
        <Link to='/postPage'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg' />
            <figcaption>
              <p>테스트1</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg' />
            <figcaption>
              <p>테스트2</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg' />
            <figcaption>
              <p>테스트3</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg' />
            <figcaption>
              <p>테스트4</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>
        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg' />
            <figcaption>
              <p>테스트5</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg' />
            <figcaption>
              <p>테스트6</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg' />
            <figcaption>
              <p>테스트7</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg' />
            <figcaption>
              <p>테스트8</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg' />
            <figcaption>
              <p>테스트9</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg' />
            <figcaption>
              <p>테스트</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg' />
            <figcaption>
              <p>테스트</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg' />
            <figcaption>
              <p>테스트</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>

        <Link to='#'>
          <figure>
            <img src='//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg' />
            <figcaption>
              <p>테스트</p>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>
        </Link>
      </Columns>
    </Container>
  );
};

export default PostList;
