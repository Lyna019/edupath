// src/components/HowItWorks.js
import React from 'react';
import registerImg from '../assets/register.webp'; // Adjust the path as needed
import quizImg from '../assets/quiz.webp'; // Adjust the path as needed
import pathImg from '../assets/path.webp'; // Adjust the path as needed

const steps = [
  {
    id: 1,
    title: ' 1) Register',
    description: 'Create your account to start exploring your opportunities.',
    img: registerImg,
  },
  {
    id: 2,
    title: '2) Take the Quiz',
    description: 'Answer a few questions to help us understand your preferences and abilities.',
    img: quizImg,
  },
  {
    id: 3,
    title: '3) Know Your Best Path',
    description: 'Discover the academic and career paths that align with your profile.',
    img: pathImg,
  },
];

const HowItWorks = () => {
  return (
    <div className="text-center py-12 bg-soft-gray">
      <h2 className="text-3xl font-bold mb-8">How It Works?</h2>
      <div className="flex flex-wrap justify-center items-center">
        {steps.map((step) => (
          <div key={step.id} className="max-w-sm m-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            <img src={step.img} alt={step.title} className="mx-auto h-40 w-40 rounded-full mb-10" />
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default HowItWorks;
