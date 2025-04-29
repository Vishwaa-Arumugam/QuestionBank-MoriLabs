import React, { useState } from 'react';
import styled from 'styled-components';

const UploadWrapper = styled.div`
  border: 2px dashed #e63946;  // Red dashed border
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  max-width: 550px;
  height:150px;
  margin: 10px auto;
  cursor: pointer;
  display:flex;
  align-item:center;

  &:hover {
    background-color: #e9ecef;  // Light gray on hover
  }
`;

const UploadTitle = styled.span`
  display: flex;
  margin-left:500px;
  margin-bottom: 3px;
  align-items:center;
  font-weight: bold;
  font-size:15px;
  color: #333;
`;

const PDFIcon = styled.div`
//   display: inline-block;
  margin-left:30px;
  margin-right: 30px;
  color: #e63946; 

  svg {
    width: 80px;
    height: 100px;
  }
`;

const UploadText = styled.div`
  margin-top:10px;
  margin-left:20px;
  font-size: 16px;
  color: #495057;
`;

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  return (
    <div>
      
        <UploadTitle>Upload Your File</UploadTitle>
        <UploadWrapper
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
        >

        <PDFIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2H6C5.4 2 5 2.4 5 3V21C5 21.6 5.4 22 6 22H18C18.6 22 19 21.6 19 21V8L14 2H12Z" fill="#E63946"/>
            <path d="M14 2V8H19" fill="#E63946"/>
            <path d="M12 13C10.9 13 10 12.1 10 11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11C14 12.1 13.1 13 12 13Z" fill="#FFF"/>
            <path d="M12 15C11.4 15 11 15.4 11 16V17H13V16C13 15.4 12.6 15 12 15Z" fill="#FFF"/>
            </svg>
        </PDFIcon>
        <UploadText>
            {file ? file.name : 'Drag and Drop a PDF'}
            <br /> or
            <br /> Click to upload file
        </UploadText>
        <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
            accept="application/pdf"
        />
        </UploadWrapper>
    </div>
  );
};

export default FileUpload;
