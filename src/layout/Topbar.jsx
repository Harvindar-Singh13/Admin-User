import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { pageTitles } from '../config/navigation';
import {ChevronDown, ChevronUp, Menu} from 'lucide-react'

const Topbar = ({showSidebar, setShowSidebar}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen]= useState(false);

  const pageTitle = pageTitles[location.pathname] || "Dashboard"
  return (
    <div className='sticky top-0 z-40 flex h-20 items-center justify-between border-b border-[#FF5C23] bg-white px-8 shadow-sm'>

      {/* Page title */}
      <div className='flex items-center gap-4'>
        <Menu onClick={()=>setShowSidebar(!showSidebar)} />
        <h1 className='text-xl font-medium text-[#FF5C23]'>
          {pageTitle}

        </h1>
      </div>

      {/* profile */}
      <div className='relative'>
        <button onClick={() =>setIsOpen(!isOpen)} className='flex items-center justify-center gap-4 cursor-pointer transition'>
          {/* letter */}
          <div className='w-9 h-9 bg-[#FF5C23] text-white rounded-full flex items-center justify-center'>
            AU
          </div>
          {/* text */}
          <span className='text-[#FF5C23]'>Admin User</span>
          {/* icon */}
          <span className='text-[#FF5C23]'>
            {isOpen ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
          </span>
        </button>

        {/* dropdown */}
        {isOpen && (
          <div className='absolute right-0 top-20 w-100 overflow-hidden roundede-xl border border-white bg-[#FF5C23] shadow-xl'>
            {/* Admin flex box  */}
            <div className='flex items-center px-3 py-4 gap-2 border-b border-[#FF5C23]'>

            </div>


          </div>
        )}
      </div>


    </div>

  )
}

export default Topbar
