import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfileAsync } from '../redux/userSlice';

const EditProfile = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setBio(user.bio);
    setAvatar(user.avatar);
    setPreview(user.avatar);
  }, [user]);

  const handleEdit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append('avatar', avatar);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('bio', bio);

    dispatch(updateUserProfileAsync(formData));
  };

  const handleAvatar = (e) => {
    setAvatar(e.target.files[0]);
    const img = document.querySelector('.img');

    const [file] = e.target.files;
    if (file) {
      img.src = URL.createObjectURL(file);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="form-page">
          <div className="form-wrap edit-form-wrap">
            <h1>Edit Profile</h1>
            <form onSubmit={handleEdit}>
              <div className="avatar-wrap">
                <div className="avatar-edit">
                  <img
                    className="img"
                    src={preview || '/avatar.jpg'}
                    alt="Profile Image"
                  />
                </div>
                <input type="file" accept="image/*" onChange={handleAvatar} />
              </div>
              <div className="input-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Bio</label>
                <input
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-2">
                  {status === 'loading' ? 'Updating Profile' : 'Save Edit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
