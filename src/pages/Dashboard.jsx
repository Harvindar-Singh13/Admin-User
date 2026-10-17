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
      value: dashboardData.stats.totalUsers.toLocalString(),
      icon: Users,
    },

    {
      lable: "Active Users",
      value: dashboardData.stats.activeUsers.toLocalString(),
      icon: UserCheck,
    },

    {
      lable: "Total Orders",
      value: dashboardData.stats.totalOrders.toLocalString(),
      icon: ListOrdered,
    },

    {
      lable: "Total Revenue",
      value: `₹ ${dashboardData.stats.revenue.toLocalString()}`,
      icon: Users,
    },
  ]


  return (
    <div>
      {/* card grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {statsItems.map((item, idx) =>{
          <div key={idx}>

          </div> 
        })}

      </div>
    </div>
  )
}

export default Dashboard
