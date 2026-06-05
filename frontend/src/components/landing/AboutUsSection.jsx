import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import siieImg from '../../assets/SIIE-Sristi-Innovations2_aboutus.jpg';
import labsImg from '../../assets/Sristi-Labs_about us.jpg';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (targetRef.current) observer.unobserve(targetRef.current);
      }
    }, { threshold: 0.2, ...options });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

const AboutUsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Panel */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div 
              className={`flex items-center gap-3 mb-6 transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-1.5 bg-emerald-700 rounded-full"></span>
                <span className="w-2 h-1.5 bg-emerald-700 rounded-full"></span>
              </div>
              <span className="text-sm font-bold tracking-wider text-emerald-800 uppercase">
                About SRISTI Innovations
              </span>
            </div>
            
            <h2 
              className={`text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.2] mb-8 transform transition-all duration-1000 delay-150 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              Fostering Grassroots Innovation for Global Change
            </h2>
            
            <div 
              className={`space-y-6 text-gray-700 text-lg leading-relaxed mb-10 transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <p>
                The Society for Research and Initiatives for Sustainable Technologies and Institutions (SRISTI) is a developmental voluntary organization dedicated to empowering grassroots innovators and protecting their intellectual property rights.
              </p>
              <p>
                By providing dedicated incubator support and maintaining a sharp focus on socially relevant technology, we serve as a vital bridge between formal science and informal, localized ingenuity. Our deep-rooted relationship with the Honey Bee Network ensures that sustainable, ground-level solutions are recognized, incubated, and scaled for meaningful global impact.
              </p>
              {/* <p className="text-sm text-gray-500 italic mt-4">
                * Note: This content will be dynamically loaded in the future.
              </p> */}
            </div>
            
            <div
              className={`transform transition-all duration-1000 delay-500 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <Link 
                to="/about" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-700 text-white font-bold text-lg rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
              >
                Read More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image Panel */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px] mt-12 lg:mt-0">
            <div 
              className={`relative z-10 w-full h-full transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
            >
              {/* Main Image (Top) */}
              <div className="w-[85%] sm:w-[80%] relative z-10">
                <img 
                  src={siieImg} 
                  alt="SIIE SRISTI Innovations" 
                  className="w-full h-auto aspect-[4/3] object-cover rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative z-10"
                />
                {/* Decorative Background Element (Border) */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 w-full h-full border-2 border-emerald-200 rounded-[2rem] sm:rounded-[3rem] -z-10 hidden sm:block transition-transform duration-700 hover:-translate-x-2 hover:-translate-y-2"></div>
              </div>
              
              {/* Overlapping Image (Bottom Right) */}
              <div className="w-[65%] sm:w-[60%] absolute -bottom-12 -right-2 sm:-bottom-16 sm:-right-6 lg:-bottom-20 lg:-right-8 z-20">
                <img 
                  src={labsImg} 
                  alt="SRISTI Labs" 
                  className="w-full h-auto aspect-[4/3] sm:aspect-square object-cover rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.25)] border-4 sm:border-8 border-white"
                />
              </div>
              
              {/* Soft Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-100/40 rounded-full blur-[80px] -z-20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
