import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Redirect, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import Login from './features/Login';
import Home from './features/Home';
import Register from './features/Register';

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
