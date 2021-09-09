import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from '../components/Hero';
import Photos from '../components/Photos';
import { getPhotosAsync } from '../redux/photosSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotosAsync());
  }, []);

  return (
    <div>
      <Hero />
      <Photos />
    </div>
  );
};

export default Home;
