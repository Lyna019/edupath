// Assuming this is in src/App.js or your main layout file
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/Herosection';
import HowItWorks from './components/HowItWorks';
import AboutQuiz from './components/AboutQuiz';
import Footer from './components/layout/Footer';

import './index.css'; // Make sure this imports Tailwind CSS
import FadeInSection from './components/FadeInSection';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
        <FadeInSection>
        <HeroSection />
        </FadeInSection >

          <HowItWorks />
           
          <FadeInSection>
          <AboutQuiz />
          </FadeInSection>

          <FadeInSection>
            <AboutUs />
            </FadeInSection>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
