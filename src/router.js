import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '@/modules/Home/router';

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
