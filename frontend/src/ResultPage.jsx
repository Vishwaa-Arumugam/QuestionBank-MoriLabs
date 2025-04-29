import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ResultPage = () => {
  const param = useParams();
  const deptName = param['deptName'];
  const selectedSem = param['selectedSem'];
  const selectedSub = param['selectedSub'];
  const subjectName = param['paperName'];
  console.log(param);

  const [pdfUrls, setPdfUrls] = useState({});
  const [error, setError] = useState(null);

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

  return (
    <>
      <div className='flex justify-center mt-16'>
        <h1 className='text-5xl font-semibold hover:underline hover:scale-110 duration-500 cursor-grabbing'>
          {selectedSub} Papers
        </h1>
      </div>
      <div className='text-center mt-10'>
        {error && <p>Error: {error}</p>}
        <ul className=''>
          {Object.entries(pdfUrls).map(([filename, url]) => (
            <li key={filename} className='text-xl flex w-fit mx-auto'>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='border px-5 pt-4 hover:text-[#114AA4] hover:underline duration-300 border-black m-5 rounded-full'>
                {filename}
              </a>
              <a 
                href={url} 
                download={filename} 
                className='bg-[#114AA4] flex flex-row gap-3 m-5 rounded-full px-3 cursor-pointer py-1'>
                <button 
                  className='text-white text-md' 
                  style={{ backgroundColor: '#114AA4', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <p className='text-white text-md'>Download</p>
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResultPage;
