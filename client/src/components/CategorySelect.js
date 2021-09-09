import React from 'react';
import { Link } from 'react-router-dom';

const CategorySelect = () => {
  return (
    <div className="category">
      <div className="category-inner">
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/">Illustrations</Link>
          </li>
          <li>
            <Link to="/">Branding</Link>
          </li>
          <li>
            <Link to="/">Mobile</Link>
          </li>
          <li>
            <Link to="/">Web Design</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategorySelect;
