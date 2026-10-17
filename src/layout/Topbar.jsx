import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { pageTitles } from '../config/navigation';
import {ChevronDown, ChevronUp, Menu, User, Settings, LogOut} from 'lucide-react'

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
          <div className='absolute right-0 top-15 w-60 overflow-hidden rounded-xl border border-white bg-[#F5F5F5] shadow-xl'>
            {/* Admin flex box  */}
            <div className='flex items-center px-3 py-4 gap-2 border-b  border-[#FF5C23]'>
              <div className='w-12 h-12 bg-[#FF5C23] rounded-full flex items-center justify-center text-white shrink-0'>
                AU
              </div>
              <div>
                <p className='text-sm text-[#FF5C23] font-medium'>Admin User</p>
                <p className='text-xs text-gray-500'>admin@gmail.com</p>
              </div>
            </div>

            {/* menu content */}
            <div className='border-b border-[#FF5C23] space-y-2 py-2'>
              {/* profile */}
              <button
              onClick={()=>{setIsOpen(false); navigate("/profile")}}
              className='w-full flex items-center gap-4 px-3 py-1.5 rounded text-gray-500 hover:bg-[#FF5C23] hover:text-white cursor-pointer' 
              >
                <User size={18} />
                <span>Profile</span>
              </button>
              {/* setting */}
              <button
              onClick={()=>{setIsOpen(false); navigate("/settings")}}
              className='w-full flex items-center gap-4 px-3 py-1.5 rounded text-gray-500 hover:bg-[#FF5C23] hover:text-white cursor-pointer'
              >
                < Settings size={18} />
                <span>Settings</span>
              </button>
            </div>

            {/* logout */}
            <div className='py-2'>
              <button 
              onClick={()=>{alert("Logout comming"); setIsOpen(false)}}
              className='w-full flex items-center gap-4 px-3 py-1.5 rounded text-gray-500 hover:bg-rose-50 cursor-pointer'
              >
                <LogOut size={18}/>
                <span className='text-md'>Logout</span>
              </button>
            </div>

          </div>
        )}
      </div>


    </div>

  )
}

export default Topbar
