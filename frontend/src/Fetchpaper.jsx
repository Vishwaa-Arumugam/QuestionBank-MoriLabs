// import React from 'react'
// import './Fetchpaper.css'
// const Fetchpaper = () => {
//   const sems = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']
//   const subjects = [
//     'Matrices and Calculus',
//     'Engineering Physics',
//     'Enginnering Chemistry',
//     'Enginerring Graphics',
//     'Technical English',
//     'Python Programming'
//   ]
//   return (
//     <div className='sem'>
//         <div className='titles'><p>Choose Your Semester:</p></div>
//         <div className='semimg'>
//         {sems.map((sem, index) => (
//           <button key={ind
import React, { useState } from 'react';
import './Fetchpaper.css';

const Fetchpaper = () => {
  const [selectedSem, setSelectedSem] = useState(null); 
  const [selectdSub, setSelectedSub] = useState(null);
  const [selectedExam, setSelctedExam] = useState(null);

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
      <div className='titles'><p>Choose Your Semester:</p></div>
      <div className='semimg'>
        {sems.map((sem, index) => (
          <button 
            key={index} 
            className='sem-button'
            onClick={() => setSelectedSem(sem)} 
          >
            {sem}
          </button>
        ))}
      </div>

      {selectedSem && ( 
        <div className='sub-div'>
          <div className='titles'><p>Choose Subject for Semester {selectedSem} :</p></div>
          <div className='subject'>
            {subjects.map((sub, index) => (
              <button key={index} 
                      className='sub-button'
                      onClick={() => setSelectedSub(sub)}>
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectdSub && (
      <div className='cat-div'>
      <div className='titles'><p>Choose Your Exam :</p></div>
      <div className='exams'>
      <button
      onClick={()=>setSelctedExam('cat1')}><img src='/ranjith/image12.png'></img></button>
      <button
      onClick={()=>setSelctedExam('cat2')}><img src='/ranjith/image13.png'></img></button>
      <button
      onClick={()=>setSelctedExam('cat3')}><img src='/ranjith/image14.png'></img></button>
      <button
      onClick={()=>setSelctedExam('cat4')}><img src='/ranjith/image15.png'></img></button>
      </div>
      </div>)}

      {
        selectedExam && (
            <div>
                <button className='fetch-button'>Fetch Papers</button>
            </div>
        )
      }
    </div>
  );
}

export default Fetchpaper;
