import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Community from '@/pages/Community';
import Dashboard from '@/pages/Dashboard';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="App bg-[var(--bg-base)] min-h-screen">
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Landing/>}/>
           <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/community" element={<Community />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;