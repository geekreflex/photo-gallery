import React from 'react';
import { useSelector } from 'react-redux';

const Error = () => {
  const { error } = useSelector((state) => state.user);

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>{error}</p>
    </div>
  );
};

export default Error;
