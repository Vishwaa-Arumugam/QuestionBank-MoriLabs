import React from 'react'
import Topbar from './Topbar'
import Fetchpaper from './Fetchpaper'
import { useParams } from 'react-router-dom'
const Sempage = () => {

  const param = useParams();
  const deptName = param['dept'];

  return (
    <div>
        <Topbar deptName={deptName}/>
        <Fetchpaper />
    </div>
  )
}

export default Sempage