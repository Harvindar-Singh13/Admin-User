import React from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../config/navigation'

const SideBar = ({showSidebar, setShowSidebar}) => {
  return (
    <div className={`fixed left-0 top-0 z-50 min-h-screen w-64 bg-[#FF5C23] text-white transform transition-transform duration-300 ease-in-out ${
      showSidebar ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}>

      {/* logo */}
      <div className='border-b border-text-secondary/10 text-white px-6 py-10'>
      <h1 className='text-2xl font-bold'>
        Admin <span className='text-[#431407] font-semibold'>Hub</span>
      </h1>
      </div>

      {/* menu */}
      <div className='mt-10'>
    
          {navigation.map((group)=>(
          <div key={group.title}>
            <p className='mb-5 px-6 text-xs text-white font-semibold'>{group.title}</p>

            <div className='space-y-4 mb-4'>
             {group.items.map((item) =>(
                <NavLink
                key={item.path}
                to={item.path}
                onClick={()=>setShowSidebar(false)}
                className={({isActive}) =>`
                relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${isActive 
                ? "bg-white text-[#FF5C23]"
                : "text-white hover:bg-[#FF5C23]"

                }
                `}
                >
                  {/* indicator */}
                  {({isActive}) =>(
                    <>
                    {isActive && (
                      <div className='absolute left-0 top-1/2 h-8 w-1 -translate-1/2 rounded-r-full bg-[#FF5C23]'></div>
                    )}
                    <item.icon />
                  <span>{item.label}</span>
                    </>
                     
                  )}
                 
          
               </NavLink>
              ))}
            </div>
          </div>
        ))} 

      </div>



    </div>
  )
}

export default SideBar
