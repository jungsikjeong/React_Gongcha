import React, { useState } from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { PictureFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { writeImagePost } from '../../actions/write';

const FileUpload = ({ writeImagePost }) => {
  const onImageUpload = (files) => {
    // 파일을 서버에 전송하기위한것
    const formData = new FormData();

    formData.append('file', files[0]);

    writeImagePost(formData);
  };

  return (
    <Dropzone onDrop={onImageUpload}>
      {({ getRootProps, getInputProps }) => (
        <div
          style={{ cursor: 'pointer', marginRight: 'auto' }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <PictureFilled
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              color: '#08c',
              padding: '10px',
              border: '1px solid #8e8e8e',
              borderRadius: '4px',
              marginRight: 'auto',
            }}
          />
        </div>
      )}
    </Dropzone>
  );
};

FileUpload.propTypes = {
  writeImagePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { writeImagePost })(FileUpload);
