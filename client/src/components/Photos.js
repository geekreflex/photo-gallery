import React from 'react';
import { useSelector } from 'react-redux';
import Photo from './Photo';

const Photos = () => {
  const { photos, status } = useSelector((state) => state.photos);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="photos-main">
        <div className="photos-container">
          {photos.map((photo) => (
            <Photo key={photo._id} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
