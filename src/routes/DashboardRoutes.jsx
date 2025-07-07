import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "../components/dashboard/Overview.jsx";
import UserList from "../pages/User/UserList.jsx";
import AiContactList from "../pages/AiContact/AiContactList.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Setting from "../pages/Setting/Setting.jsx";
const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="users" element={<UserList />} />
      <Route path="settings" element={<Setting />} />
      {/* <Route path="Contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default DashboardRoutes;
