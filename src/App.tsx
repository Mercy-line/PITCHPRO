import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

// Pages
import Community from '@/pages/Community';
import Dashboard from '@/pages/Dashboard';
import Landing from '@/pages/Landing';
import PitchPrep from '@/pages/PitchPrep';
import Learn from '@/pages/Learn';
import PracticeStudio from '@/pages/PracticeStudio';



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
          <Route path="/app/pitchprep" element={<PitchPrep />} />
          <Route path="/app/learn" element={<Learn />} />
          <Route path="/app/practice" element={<PracticeStudio />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;