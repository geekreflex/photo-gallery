import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user, status } = useSelector((state) => state.user);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="user-info">
          <div className="user-img-wrap">
            <img src={user.avatar || '/avatar.jpg'} />
          </div>

          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <p>{user.bio}</p>
        </div>
        <div className="follow-wrap">
          <div>
            <span>Followers: {892}</span>
          </div>
          <div>
            <span>Following: {39}</span>
          </div>
        </div>
        <div className="edit-wrap">
          <Link className="btn btn-2" to="/edit-profile">
            Edit Your Profile
          </Link>
        </div>
      </div>
      <div>
        <div className="container">
          <div>
            <span>Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
