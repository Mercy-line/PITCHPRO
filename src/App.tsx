import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

// Pages
import Community from '@/pages/Community';
import Dashboard from '@/pages/Dashboard';
import Landing from './pages/Landing';

function App() {
  // Call useTheme at the top level to handle the initial theme application
  // and persistence globally.
  useTheme();

  return (
    <Router>
      <div className="App bg-[var(--bg-base)] min-h-screen transition-colors duration-300">
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/community" element={<Community />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;