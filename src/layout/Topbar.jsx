import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { pageTitles } from '../config/navigation';
import {Menu} from 'lucide-react'

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle = pageTitles[location.pathname] || "Dashboard"
  return (
    <div className='sticky top-0 z-40 flex h-20 items-center justify-between border-b border-[#FF5C23] bg-white px-8 shadow-sm'>

      {/* Page title */}
      <div className='flex items-center gap-4'>
        <Menu />
        <h1 className='text-xl font-medium text-[#FF5C23]'>
          {pageTitle}

        </h1>
      </div>

      {/* profile */}
      <div></div>


    </div>

  )
}

export default Topbar
