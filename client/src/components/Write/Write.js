import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import { logout } from '../../actions/auth';
import { writePageOn } from '../../actions/write';
import { writePageClose } from '../../actions/write';
import Form from 'antd/lib/form/Form';
import { Input } from 'antd';
import { PictureFilled } from '@ant-design/icons';

const { TextArea } = Input;

const ButtonStyle = styled(Button)`
  ::after {
    content: '';
    width: 0;
    height: 2px;
    background: #cf3e58;
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  :hover::after {
    width: 100%;
  }

  img {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-text {
    display: block;
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 0px;
    top: 15rem;
    z-index: 2;
    margin-left: 33px;
    margin-right: 50px;
    margin-top: 10px;

    ::after {
      content: '';
      width: 0;
      height: 2px;
      background: #cf3e58;
      display: block;
      margin: auto;
      transition: 0.5s;
    }

    :hover::after {
      width: 100%;
    }
  }
`;

const Contents = styled.div`
  padding: 10px;
  /* border: 1px solid #8e8e8e; */
  /* border-radius: 4px; */
`;

const areaStyle = {
  color: '#fff',
  background: '0 0',
  border: '0',
  outline: '0',
  outline: '0',
  padding: '0',
  resize: 'none',
  fontSize: '1.25rem',
};

const Title = () => {
  return (
    <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
      <h2>게시글 만들기</h2>
    </div>
  );
};

const Write = ({
  user,
  isAuthenticated,
  visible,
  writePageOn,
  writePageClose,
}) => {
  const showModal = () => {
    // setVisible(true);
    writePageOn();
  };

  const handleOk = (e) => {
    // setVisible(false);
    writePageClose();
  };

  const handleCancel = (e) => {
    // setVisible(false);
    writePageClose();
  };

  return (
    <Fragment>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title={<Title />}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form style={{ padding: '0' }}>
          <TextArea
            rows={5}
            placeholder='무슨 생각을 하고 계신가요?'
            size='large'
            style={areaStyle}
            bordered={false}
          />
        </Form>

        <Contents>
          <PictureFilled
            style={{ cursor: 'pointer', fontSize: '24px', color: '#08c' }}
          />
        </Contents>
      </Modal>
    </Fragment>
  );
};

Write.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  writePageOn: PropTypes.func,
  writePageClose: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  visible: state.write.visible,
});

export default connect(mapStateToProps, {
  logout,
  writePageOn,
  writePageClose,
})(Write);
