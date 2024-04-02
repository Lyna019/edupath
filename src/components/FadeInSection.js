// src/components/FadeInSection.js
import React, { useRef, useEffect, useState } from 'react';

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
