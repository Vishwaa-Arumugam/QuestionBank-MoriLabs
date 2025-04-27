import React, { useState, useEffect } from 'react';
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
    <div className="container mx-auto px-4 py-8 max-w-screen-2xl">
      <div className="mb-8">
        <div className="text-2xl font-bold mb-4 text-gray-800">
          Choose Your Semester:
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {sems.map((sem, index) => (
            <button
              key={index}
              className={`py-7 px-10 rounded-lg font-medium lg:text-xl text-lg transition-all ${selectedSem === sem
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              onClick={() => setSelectedSem(sem)}
            >
              {sem}
            </button>
          ))}
        </div>
      </div>

      {selectedSem && (
        <div className="mb-8 mt-16">
          <div className="text-2xl font-bold mb-4 text-gray-800">
            Choose Subject for Semester {selectedSem}:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((sub, index) => (
              <button
                key={index}
                className={`py-3 px-4 rounded-lg font-medium lg:text-lg text-md transition-all text-left ${selectedSub === sub
                    ? 'bg-black text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                onClick={() => setSelectedSub(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}


      {selectedSub && (
        <div className="mb-8 mt-16">
          <div className="text-2xl font-bold mb-4 text-gray-800">
            Choose Your Exam:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6"> 
            {['cat1', 'cat2', 'sat', 'sem'].map((cat, index) => (
              <button
                key={index}
                className={`p-4 rounded-xl transition-all flex flex-col items-center ${selectedExam === cat ? 'ring-4 ring-black bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                onClick={() => setSelectedExam(cat)}
              >
                {console.log(12 + index)}
                <img
                  src={`/ranjith/image${12 + index}.png`}
                  alt={`${cat}`}
                  className="w-32 h-32 object-contain mb-2"
                />
                <span className="text-lg font-medium text-gray-700">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      )}


      {selectedExam && (
        <div className="flex justify-center mt-16">
          <div onClick={() =>
              navigate(
                `/result/${selectedDept}/${selectedSem}/${selectedSub}/${selectedExam}`
              )
            }>
            <Button name={'Fetch Papers'}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fetchpaper;