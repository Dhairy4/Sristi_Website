import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileImage } from 'lucide-react';
import forestAsset from "../assets/forest.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Resources = () => {
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
            SIIE-SRISTI BioNEST
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Resources & Facilities
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed">
            State-of-the-art infrastructure designed to propel grassroots ideas to national success.
          </motion.p>
        </div>
      </div>

      <section className="relative z-20 -mt-12 md:-mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 text-center">
          
           
           <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-12">RESOURCES AND FACILITIES</h2>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               "https://sristiinnovations.com/wp-content/uploads/2023/08/WhatsApp-Image-2020-11-17-at-16.13.04-1-300x225.jpg",
               "https://sristiinnovations.com/wp-content/uploads/2023/08/WhatsApp-Image-2020-11-17-at-16.13.08-2-300x225.jpg",
               "https://sristiinnovations.com/wp-content/uploads/2023/08/WhatsApp-Image-2020-11-17-at-16.13.14-300x225.jpg",
               "https://sristiinnovations.com/wp-content/uploads/2023/08/WhatsApp-Image-2020-11-17-at-16.12.59-300x225.jpg",
               "https://sristiinnovations.com/wp-content/uploads/2023/08/Screenshot-2021-02-13-at-12.15.20-PM-300x169.jpg",
               "https://sristiinnovations.com/wp-content/uploads/2023/08/Screenshot-2021-02-13-at-12.16.40-PM-300x167.jpg",
               "https://sristiinnovations.com/wp-content/uploads/2023/08/Screenshot-2021-02-13-at-12.18.37-PM-300x167.jpg",
               "https://sristiinnovations.com/wp-content/uploads/2023/08/Screenshot-2021-02-13-at-12.20.21-PM-300x167.jpg",
               "https://sristiinnovations.com/wp-content/uploads/2023/08/Screenshot-2021-02-13-at-12.04.07-PM-300x169.jpg"
             ].map((imgSrc, idx) => (
               <motion.div 
                 key={idx} 
                 whileHover={{ y: -5 }}
                 className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 bg-gray-50"
               >
                 <img 
                   src={imgSrc.replace('-300x225', '').replace('-300x169', '').replace('-300x167', '')} 
                   onError={(e) => { e.target.onerror = null; e.target.src = imgSrc; }}
                   alt={`Facility ${idx + 1}`} 
                   className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                 />
               </motion.div>
             ))}
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Resources;
