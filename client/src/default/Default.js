import React from 'react';
import { Link } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';

import './Default.css';
import smallImage from '../assets/small-img.jpg';

const Default = () => {
  var show = document.getElementById('nav-links');

  const onShowMenu = () => {
    show.style.right = '0';
  };

  const onCloseMenu = () => {
    show.style.right = '-200px';
  };

  return (
    <div className='hero'>
      <div className='nav-bar'>
        <div className='nav-logo'>
          <h1>
            공들여 <br />
            맛있는 차 <br />
            <b>공차</b>
          </h1>
        </div>

        <div className='nav-links' id='nav-links'>
          <RiCloseLine
            className='icon-bars'
            style={{ fontWeight: 'bold', fontSize: '2rem' }}
            onClick={onCloseMenu}
          />

          <ul>
            <Link to='#'>
              <li>HOME</li>
            </Link>
            <Link to='#'>
              <li>ABOUT</li>
            </Link>
            <Link to='#'>
              <li>RECIPE</li>
            </Link>
          </ul>
          <button type='button' className='btn'>
            SIGN IN
          </button>
        </div>
      </div>

      <FaBars className='icon-bars' onClick={onShowMenu} />

      <div className='banner-title'>
        <h1>
          <span>Tea</span>로 시작하는 <br />
          <span>The</span> 기분 좋은 아침!
        </h1>
        <button className='btn' type='button'>
          EXPLORE
        </button>
      </div>

      <div className='vertical-bar'>
        <div className='search-icon'>
          <FaList className='icon' />
          <BsSearch className='icon' />
        </div>
        <div className='social-icon'>
          <FiFacebook className='icon' />
          <FiInstagram className='icon' />
          <FiTwitter className='icon' />
          <FaPinterestP className='icon' />
        </div>
      </div>

      <div className='notifications'>
        <div className='contents'>
          <small>
            공차는 세련되고 전문적인 모습으로 새로워지고 있습니다.
            <p>
              <Link to='#'>PREV</Link>
              <Link to='#'>NEXT</Link>
            </p>
          </small>
        </div>
        <div className='notification-img'>
          <img src={smallImage} alt='views' />
        </div>
      </div>
    </div>
  );
};

export default Default;
