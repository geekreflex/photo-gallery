import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategorySelect from '../components/CategorySelect';
import Hero from '../components/Hero';
import { getPhotosAsync } from '../redux/photoSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotosAsync());
  }, []);

  return (
    <div>
      <Hero />
      <CategorySelect />
    </div>
  );
};

export default Home;
