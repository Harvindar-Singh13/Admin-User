import React, { useEffect, useState } from "react";
import { api } from "../services/api";

const Settings = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadDashboardData = async () => {
    setLoading(true);

    try {
      const data = await api.getDashboard();
      setDashboardData(data);
    } catch (error) {
      console.log("Dashboard loading failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   loadDashboardData();
  // }, []);

  if (loading && !dashboardData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="p-6 bg-white rounded-xl border border-gray-200">
        <div>
          <p className="text-gray-500">Setting data not available</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
};

export default Settings;
