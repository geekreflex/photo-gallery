import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadPhotoAsync } from '../redux/photosSlice';

const Upload = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);

    dispatch(uploadPhotoAsync(formData));
  };

  return (
    <div>
      <h1>Upload</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
