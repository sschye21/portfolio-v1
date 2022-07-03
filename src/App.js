import React from 'react';
import Home from './pages/Home'
import ColourModal from './components/ColourModal';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App () {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ColourModal />} />
          <Route path="/home" element={<Home />} />
          <Route element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
