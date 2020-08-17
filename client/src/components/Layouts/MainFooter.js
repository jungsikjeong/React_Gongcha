import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

import insideImage01 from '../../assets/inside-image01.jpg';
import insideImage02 from '../../assets/inside-image02.jpg';
import insideImage03 from '../../assets/inside-image03.jpg';
import insideImage04 from '../../assets/inside-image04.jpg';

const MainFooterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  right: 0;
  bottom: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Contents = styled.div`
  flex-basis: 50%;
  padding: 10px;
  color: #fff;

  p {
    text-align: right;
    margin-top: 10px;
  }
  .text {
    font-size: 13px;
    margin: 0 10px;
    color: #fff;
    cursor: pointer;

    :hover {
      font-weight: bold;
    }
  }
`;

const Image = styled.div`
  flex-basis: 50%;

  /* 이미지 꽉 채우기위해서 사용 */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const MainFooter = () => {
  const [number, setNumber] = useState(1);

  const [images, setImages] = useState([
    {
      id: 1,
      image: insideImage01,
    },
    {
      id: 2,
      image: insideImage02,
    },
    {
      id: 3,
      image: insideImage03,
    },
    {
      id: 4,
      image: insideImage04,
    },
  ]);

  // wow.js 애니메이션 사용
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const onClickPrev = (e) => {
    if (number === 1) {
      return setNumber(4);
    }
    setNumber(number - 1);
  };

  const onClickNext = (e) => {
    if (number === 4) {
      return setNumber(1);
    }
    setNumber(number + 1);
  };

  return (
    <MainFooterContainer
      className='wow fadeInUp'
      data-wow-iteration='1'
      data-wow-delay='1s'
    >
      <Contents>
        <small>
          공차는 세련되고 전문적인 모습으로 새로워지고 있습니다.
          <p>
            <span className='text' onClick={onClickPrev}>
              PREV
            </span>
            <span className='text' onClick={onClickNext}>
              NEXT
            </span>
          </p>
        </small>
      </Contents>

      {images.map((image) => {
        if (image.id === number) {
          return (
            <Image key={image.id}>
              <img src={image.image} alt='views' />
            </Image>
          );
        }
      })}
    </MainFooterContainer>
  );
};

export default MainFooter;
