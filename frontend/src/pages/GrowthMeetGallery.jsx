import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Images } from 'lucide-react';
import forestAsset from "../assets/forest.jpeg";

import img1 from "../assets/growth_meet/img1.jpeg";
import img2 from "../assets/growth_meet/img2.jpeg";
import img3 from "../assets/growth_meet/img3.jpeg";
import img4 from "../assets/growth_meet/img4.jpeg";
import img5 from "../assets/growth_meet/img5.jpeg";
import img6 from "../assets/growth_meet/img6.jpeg";
import img7 from "../assets/growth_meet/img7.jpeg";
import img8 from "../assets/growth_meet/img8.jpeg";
import img9 from "../assets/growth_meet/img9.jpeg";
import img10 from "../assets/growth_meet/img10.jpeg";
import img11 from "../assets/growth_meet/img11.jpeg";
import img12 from "../assets/growth_meet/img12.jpeg";
import img13 from "../assets/growth_meet/img13.jpeg";

const images = [img13, img7, img3 , img9,img8, img12,img5, img6,  img10, img4, img11, img2, img1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GrowthMeetGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8fafc] text-gray-700 min-h-screen relative overflow-hidden font-sans">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-750/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={forestAsset} alt="Background" className="w-full h-full object-cover opacity-35 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30 mb-6">
            Insights
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Growth Meet Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed">
            A visual recap of our interactive learning environment and vibrant startup ecosystem.
          </motion.p>
        </div>
      </div>

      <section className="relative z-20 -mt-12 md:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
          
           
           <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
             {images.map((imgSrc, index) => (
               <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group relative">
                 <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-500 z-10 pointer-events-none"></div>
                 <img src={imgSrc} alt={`Gallery ${index + 1}`} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
               </div>
             ))}
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GrowthMeetGallery;
