import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa'; // We are using react-icons for the PDF icon.

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
    <div className="flex flex-col items-center mt-10 space-y-4">
      <h2 className="text-xl text-center font-semibold text-gray-800">Upload Your File</h2>

      <div
        className="flex flex-col items-center justify-center p-8 border-4 border-dashed border-red-600 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer w-full max-w-md mx-auto"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <FaFilePdf className="text-red-600 text-6xl mb-4" />
        <p className="text-lg text-gray-600 mb-2">
          {file ? file.name : 'Drag and Drop a PDF'}
        </p>
        <p className="text-sm text-gray-500">or click to upload file</p>

        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileUpload}
          accept="application/pdf"
        />
      </div>
    </div>
  );
};

export default FileUpload;
