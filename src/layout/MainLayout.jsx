import React, { useState } from "react";
import {Outlet} from "react-router-dom"
import Sidebar from './Sidebar'
import Topbar from './Topbar'



const MainLayout = () => {
  const[showSidebar, setShowSidebar] = useState(false)
  return (
    <div
      className="min-h-screen bg-bg">
        {/* Mobile layout */}
        {showSidebar && (
          <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={()=>setShowSidebar(false)}>

          </div>
        )}


      {/* Sidebar */}
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar= {setShowSidebar}
       />

      {/* Right Area */}


      <div className='md:ml-64 min-h-screen'>
        {/* Topbar */}
        <Topbar 
        showSidebar={showSidebar}
        setShowSidebar= {setShowSidebar}
        />

        <main className="p-8">
          <Outlet />
        </main>

      </div>



    </div>
  );
};

export default MainLayout;
