import React from 'react'
import './Topbar.css'

const Topbar = ({deptName}) => {
  return (
    <div>
        <div className='t1'>
            <h1 className='title'><span className='dept'>{deptName}</span> Papers</h1>
        </div>
        <div className='t2'>
            <p>Welcome to the treasure trove! Behold, the <br/>exclusive repository of {deptName} department papers—<br />CAT exams and the infamous end semester <br />ordeal. Your journey to academic enlightenment <br />begins here. Ready to conquer?</p>
            <img className="boy" src='/ranjith/boy.png'></img>
        </div>
    </div>
  )
}

export default Topbar