import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResultPage = () => {
  const param = useParams();
  const deptName = param['deptName'];
  const selectedSem = param['selectedSem'];
  const selectedSub = param['selectedSub'];
  const subjectName = param['paperName'];

  const [pdfUrls, setPdfUrls] = useState({});
  const [error, setError] = useState(null);
  const [isDownloading, setIsDownloading] = useState(null);

  const owner = 'Vishwaa-Arumugam';
  const repo = 'QBTest';
  const path = `${deptName}/${selectedSem}/${selectedSub}/${subjectName}`;

  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
        const files = response.data;

        const pdfFilesDict = files.reduce((acc, file) => {
          if (file.name.endsWith('.pdf')) {
            acc[file.name] = file.download_url;
          }
          return acc;
        }, {});

        setPdfUrls(pdfFilesDict);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPdfFiles();
  }, [owner, repo, path]);

  const handleDownload = (filename) => {
    setIsDownloading(filename);
    setTimeout(() => setIsDownloading(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 transform hover:scale-105 transition-transform duration-300">
            {selectedSub} Papers
          </h1>
          <p className="text-lg text-gray-600">
            Department of {deptName} | Semester {selectedSem}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded">
            <p>Error: {error}</p>
          </div>
        )}

        {/* PDF List */}
        <div className="space-y-6">
          {Object.entries(pdfUrls).map(([filename, url]) => (
            <div 
              key={filename} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-medium text-gray-800 truncate max-w-xs">
                    {filename.replace('.pdf', '')}
                  </h3>
                  <p className="text-sm text-gray-500">PDF Document</p>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    View
                  </a>
                  
                  <a
                    href={url}
                    download={filename}
                    onClick={() => handleDownload(filename)}
                    className="relative px-4 py-2 bg-black text-white rounded-lg hover:bg-black transition-colors duration-200 overflow-hidden"
                  >
                    {isDownloading === filename ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Downloading...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </span>
                    )}
                    {isDownloading === filename && (
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-black animate-progress"></span>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {Object.keys(pdfUrls).length === 0 && !error && (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No papers found</h3>
            <p className="text-gray-500">We couldn't find any PDFs for this selection.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s linear;
        }
      `}</style>
    </div>
  );
};

export default ResultPage;