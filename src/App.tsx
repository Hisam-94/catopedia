import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CatListPage from './pages/CatListPage';
import CatDetailPage from './pages/CatDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatListPage />} />
        <Route path="/cat/:id" element={<CatDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
