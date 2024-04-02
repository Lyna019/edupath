// src/components/AboutQuiz.js
import React from 'react';
import { Link } from 'react-router-dom';
import quizImage from '../assets/quiz-image1.webp'; // Make sure this path is correct

const AboutQuiz = () => {
  return (
    <section className=" w-full py-12 bg-black text-white">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold mb-6 text-cool-blue">Discover Your Path with MatcherQuiz</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img src={quizImage} alt="Quiz" className="rounded-full mb-4 md:mb-0 md:mr-4 w-48 h-48" />
          <div>
            <p className="mb-6">
              Ever wonder what academic and career path is right for you? Our MatcherQuiz is designed to help you uncover your potential and guide you towards paths that align with your interests and strengths.
            </p>
            <ul className="list-disc list-inside mb-6 pl-4">
              <li className="text-vibrant-orange">Tailored Recommendations: Receive personalized suggestions based on your responses.</li>
              <li className="text-rich-orange">Insightful Analysis: Understand your strengths and how they can shape your academic and career journey.</li>
              <li className="text-pink">Explore Opportunities: Discover courses, universities, and career options you might not have considered.</li>
            </ul>
            
            
            <div className="text-center mt-8">
  <div className="inline-block">
    <Link to="/quiz" className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-8 rounded transition-all duration-300 ease-in-out border-2 border-white">
      Take the Quiz
    </Link>
  </div>
</div>




          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQuiz;
