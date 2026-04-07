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

// Layout
import AppLayout from '@/components/layout/AppLayout';



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
          
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="community" element={<Community />} />
            <Route path="pitchprep" element={<PitchPrep />} />
            <Route path="learn" element={<Learn />} />
            <Route path="practice" element={<PracticeStudio />} />
          </Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;