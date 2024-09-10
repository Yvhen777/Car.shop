import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPanel from '../../components/Admin/AdminPanel';
import Login from '../../components/Admin/Login';
import { isAuthenticated } from '../../utils/authHelper';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <Routes>
      <Route path="/*" element={<AdminPanel setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  );
};

export default AdminPage;