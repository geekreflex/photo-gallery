import React from 'react';
import { IoEyeOutline, IoHeartOutline } from 'react-icons/io5';

const Photo = ({ photo }) => {
  return (
    <div className="photo-wrap">
      <div className="photo-inner">
        <div className="img-wrap">
          <img src={`${photo.url}`} alt={photo.name} />
        </div>
        <div className="photo-info">
          <div className="photo-user">
            <div className="avatar">
              <img src={photo.user?.avatar} />
            </div>
            <div>
              {photo.user?.firstName} {photo.user?.lastName}
            </div>
          </div>
          <div className="photo-stats">
            <div>
              <IoEyeOutline size="20" /> {photo.views}
            </div>
            <div>
              <IoHeartOutline size="20" /> {photo.likes.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
