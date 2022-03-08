import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductDetail from './pages/ProductDetail';
import FilterPage from './pages/FilterPage';
function index(props) {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='filter/:params' element={<FilterPage />} />
      <Route path=':type/:id' element={<ProductDetail />} />
    </Routes>
  );
}

index.propTypes = {};

export default index;
