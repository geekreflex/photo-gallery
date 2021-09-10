import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPhotoAsync } from '../redux/photosSlice';

const Upload = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.photos);

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);

    dispatch(uploadPhotoAsync(formData));
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);

    const img = document.querySelector('.preview-upload-img');

    const [file] = e.target.files;
    if (file) {
      img.src = URL.createObjectURL(file);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="upload">
          <div className="upload-wrap">
            <h1>Upload Photo</h1>
            <div className="upload-form">
              <form onSubmit={handleSubmit}>
                <div className="upload-input">
                  <input type="file" accept="image/*" onChange={handleUpload} />
                </div>
                <div className="input-group">
                  <label>Image Title</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Descriptive Title*"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <button className="btn btn-2" type="submit">
                  {status === 'loading' ? 'Uploading Photo' : 'Upload'}
                </button>
              </form>
            </div>

            <div className="preview-img">
              <img className="preview-upload-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
