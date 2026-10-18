import React, { useEffect, useState } from 'react'
import {api} from '../services/api'
import { ListOrdered, User, UserCheck, Users } from 'lucide-react';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadDashboardData = async () =>{
    
    setLoading(true);

    try{
      const data = await api.getDashboard();
      setDashboardData(data);

    }catch (error) {
      console.log("Dashboard loading failed:", error);
    }finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    loadDashboardData()
  }, [])

  if (loading && !dashboardData){
    return(
      <div className='flex items-center justify-center h-64'>
        <div className='w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    )
  }

  if (!dashboardData){
    return(
      <div className='p-6 bg-white rounded-xl border border-gray-200'> 
        <div>
          <p className='text-gray-500'>Dashboard data not available</p>
        </div>
      </div>
    )
  }

  const statsItems = [
    {
      lable: "Total Users",
      value: dashboardData.stats.totalUsers.toLocaleString(),
      icon: Users,
    },

    {
      lable: "Active Users",
      value: dashboardData.stats.activeUsers.toLocaleString(),
      icon: UserCheck,
    },

    {
      lable: "Total Orders",
      value: dashboardData.stats.totalOrders.toLocaleString(),
      icon: ListOrdered,
    },

    {
      lable: "Total Revenue",
      value: `₹ ${dashboardData.stats.revenue.toLocaleString()}`,
      icon: Users,
    },
  ]


  return (
    <div>
      {/* card grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {statsItems.map((item, idx) =>(
          <div key={idx} className='bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-between'>
            <div className='space-y-2 '>
              <p className='text-xs font-light text-[#FF5C23] uppercase'>{item.lable}</p>
              <p className=' text-2xl font-light text-gray-900'>{item.value}</p>
            </div>
            <div className='w-10 h-10 bg-gray-50 rounded flex items-center justify-center'>
              <item.icon />
            </div>
          </div> 
        ))}
      </div>

      {/* Grid layout */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {/* left part */}
        <div className='col-span-2 h-70 bg-white border border-gray-200 rounded-xl mt-8 p-6'>
          <p className='text-sm font-light uppercase'>Revenue Overview</p>
        </div>

        {/* right part */}
        <div className='col-span-1 bg-white border border-gray-200 rounded-xl mt-8 p-6'>
          <p className='text-sm font-light uppercase'>Recent Order</p>

          <div className='h-50 overflow-y-scroll'>
            {dashboardData.recentOrders.map((order, idx) =>(
              <div key={idx} className='flex item justify-between py-2 border-b border-gray-100 pr-2'>
                <div>
                  <p className='text-sm font-light text-[#FF5C23]'>{order.customer}</p>
                  <p className='text-xs font-light flex gap-2'>
                    <span>₹{order.amount}</span>
                    <span>{order.date}</span>
                  </p>
                </div>
                {/* status */}
                <span className={`text-[10px] px-2 py-2 rounded-full bg-gray-100 ${order.status === "Completed" ? "bg-green-100 text-green-500" :
                  order.status === "Pending" ? "bg-orange-100 text-orange-400" :
                  "bg-blue-100 text-blue-400"
                }`}>
                  {order.status}
                </span>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard
