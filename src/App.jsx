import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Bridge from './components/Bridge';
import Celebration from './components/Celebration';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 1. Gate Logic: User must pass Login and Quiz first
  if (!isUnlocked) return <Login onUnlock={() => setIsUnlocked(true)} />;
  if (!isQuizFinished) return <Quiz onComplete={() => setIsQuizFinished(true)} />;

  // 2. Main App with Router
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        
        {/* The Routes decide which "Page" to show based on the URL */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/celebration" element={<Celebration />} />
          
          {/* Redirect any unknown URL back to Hero */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;