import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Welcome {user.firstName} </h3>
    </div>
  );
};

export default Dashboard;
