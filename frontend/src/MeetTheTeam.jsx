import React from 'react'
import TeamComponent from '../public/MeetTheTeam/TeamComponent'


const MeetTheTeam = () => {
  const socials = {
    'VISHNU': { 'instagram': 'https://www.instagram.com/vishnusiddharthvr/', 'linkedin': 'https://www.linkedin.com/in/vishnusiddharth/', 'github': 'https://github.com/HallowSiddharth' },
    'VISHWA': { 'instagram': '', 'linkedin': 'https://www.linkedin.com/in/vishwaa-arumugam/', 'github': 'https://github.com/HallowSiddharth' },
    'VIJAY': { 'instagram': '', 'linkedin': 'https://www.linkedin.com/in/vijay-veerasekaran-1819b0259/', 'github': 'https://github.com/HallowSiddharth' },
    'RANJITH': { 'instagram': '', 'linkedin': 'https://www.linkedin.com/in/ranjith-srikanth-55a61023b/', 'github': 'https://github.com/HallowSiddharth' },
    'VISHAL': { 'instagram': '', 'linkedin': 'https://www.linkedin.com/in/vishal-prakash-40728a25b/', 'github': 'https://github.com/HallowSiddharth' },
  }

  return (
    <>
      <div className='text-center justify-center text-4xl  font-bold text-black mb-[17px] mt-5'>
        Meet Mori labs
      </div>
      <div className="meet">
        <TeamComponent></TeamComponent>
      </div>
    </>
  )
}

export default MeetTheTeam
