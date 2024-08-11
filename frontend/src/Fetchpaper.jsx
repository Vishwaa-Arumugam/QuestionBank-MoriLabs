import React, { useState, useEffect } from 'react';
import './Fetchpaper.css';
import Button from './Button';
import { useNavigate, useParams } from 'react-router-dom';

const Fetchpaper = () => {
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);
  const navigate = useNavigate();
  const { dept } = useParams();

  useEffect(() => {
    if (dept) {
      setSelectedDept(dept);
    }
  }, [dept]);

  const sems = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  const subjects = [
    'Matrices and Calculus',
    'Engineering Physics',
    'Engineering Chemistry',
    'Engineering Graphics',
    'Technical English',
    'Python Programming'
  ];

  return (
    <div className='sem'>
      <div className='titles'>
        <p>Choose Your Semester:</p>
      </div>
      <div className='semimg'>
        {sems.map((sem, index) => (
          <button 
            key={index} 
            className={`sem-button ${selectedSem === sem ? 'selected' : ''}`}
            onClick={() => setSelectedSem(sem)}
          >
            {sem}
          </button>
        ))}
      </div>

      {selectedSem && (
        <div className='sub-div'>
          <div className='titles'>
            <p>Choose Subject for Semester {selectedSem} :</p>
          </div>
          <div className='subject'>
            {subjects.map((sub, index) => (
              <button 
                key={index} 
                className={`sub-button ${selectedSub === sub ? 'selected' : ''}`}
                onClick={() => setSelectedSub(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedSub && (
        <div className='cat-div'>
          <div className='titles'>
            <p>Choose Your Exam :</p>
          </div>
          <div className='exams'>
            <button onClick={() => setSelectedExam('cat1')}>
              <img src='/ranjith/image12.png' alt='CAT 1' />
            </button>
            <button onClick={() => setSelectedExam('cat2')}>
              <img src='/ranjith/image13.png' alt='CAT 2' />
            </button>
            <button onClick={() => setSelectedExam('cat3')}>
              <img src='/ranjith/image14.png' alt='CAT 3' />
            </button>
            <button onClick={() => setSelectedExam('cat4')}>
              <img src='/ranjith/image15.png' alt='CAT 4' />
            </button>
          </div>
        </div>
      )}

      {selectedExam && (
        <div className='button-div' onClick={() => navigate(`/result/${selectedDept}/${selectedSem}/${selectedSub}/${selectedExam}`)}>
          <Button name={"Fetch Papers"} />
        </div>
      )}
    </div>
  );
};

export default Fetchpaper;
