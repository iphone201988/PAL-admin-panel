import React from "react";
import { DashboardShell } from "../components/dashboard/DashboardShell.jsx";
import DashboardRoutes from "../routes/DashboardRoutes.jsx";

import Overview from "../components/dashboard/Overview.jsx";
import UserList from "./User/UserList.jsx";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <DashboardShell>
        <DashboardRoutes />
      </DashboardShell>
    </div>
  );
};

export default Dashboard;
