import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import startupsImg from '../../assets/Our_Startup_Home Page.jpg';

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-[#8bc34a] mb-2">
      {count}{suffix}
    </div>
  );
};

const stats = [
  { end: 50, suffix: '+', label: 'Entrepreneurs Supported' },
  { end: 20, suffix: '', label: 'Active Entrepreneurs' },
  { end: 380, suffix: 'L+', label: 'Funds Raised' },
  { end: 100, suffix: '+', label: 'Employment Generations' },
  { end: 100, suffix: '+', label: 'No of Product Launched' },
];

const OurStartupsSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Startups Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 lg:mb-24">
          
          {/* Left Content Panel (Card Form) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start bg-emerald-50/50 p-8 sm:p-10 rounded-[2rem] shadow-xl shadow-emerald-900/5 border border-emerald-100/50">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#8bc34a] mb-6">
              Our Startups
            </h2>
            
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-8 text-justify lg:text-left">
              Sanctuary of Innovation, Incubation and Entrepreneurship (SIIE), SRISTI-BioNEST Grambharti, Gandhinagar is one of the BIRAC incubation centers that nurture technology and innovations from and for the grassroots level. SIIE is supporting innovation-based start-ups in multidisciplinary fields like agriculture, environment, medicine, veterinary, biotechnology, microbiology, life sciences, food science, children's creativity, and grassroots innovative ideas. The incubation center is supported by BIRAC (Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India).
            </p>
            
            <Link 
              to="/startups" 
              className="px-8 py-3 bg-[#8bc34a] text-white font-semibold rounded hover:bg-[#7cb342] transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-lime-500/50"
            >
              Read More
            </Link>
          </div>

          {/* Right Image Panel */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white bg-gray-50">
              <img 
                src={startupsImg} 
                alt="Our Startups at SRISTI" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Animated Stats Section (No Background) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 lg:gap-y-0 text-center pt-16 mt-4 border-t border-gray-200 lg:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-start px-4 sm:px-6">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              
              {/* Subtle accent divider */}
              <div className="w-10 h-1 bg-[#8bc34a]/30 rounded-full my-4"></div>
              
              <p className="text-gray-500 font-bold text-xs sm:text-sm tracking-widest uppercase leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurStartupsSection;
