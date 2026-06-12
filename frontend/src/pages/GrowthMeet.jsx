import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import forestAsset from "../assets/forest.jpeg";

import img4 from "../assets/growth_meet/img4.jpeg";
import img5 from "../assets/growth_meet/img5.jpeg";
import img12 from "../assets/growth_meet/img12.jpeg";
import img13 from "../assets/growth_meet/img13.jpeg";
import img7 from "../assets/growth_meet/img7.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GrowthMeet = () => {
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
            Startup Growth Meet
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed">
            A dynamic platform empowering aspiring entrepreneurs through practical insights and networking.
          </motion.p>
        </div>
      </div>

      <section className="relative z-20 -mt-12 md:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
           
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 inline-block relative">
               STARTUP GROWTH MEET
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-emerald-500 rounded-full"></div>
             </h2>
           </div>

           <div className="space-y-16 md:space-y-24">
             
             {/* Row 1: Text Left, Image Right */}
             <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
               <div className="w-full md:w-1/2 order-2 md:order-1">
                 <p className="text-gray-600 leading-relaxed text-lg font-medium">
                   Entrepreneur & Startup Growth Meet is a dynamic platform designed to empower aspiring entrepreneurs, startup founders, innovators and small business owners by providing practical insights into the entrepreneurial ecosystem. The program creates opportunities for participants to learn from industry experiences, understand emerging market trends and explore pathways for transforming innovative ideas into sustainable enterprises.
                 </p>
               </div>
               <div className="w-full md:w-1/2 order-1 md:order-2">
                 <div className="rounded-2xl overflow-hidden aspect-video shadow-xl hover:shadow-2xl transition-shadow duration-300">
                   <img src={img13} alt="Growth Meet Session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
               </div>
             </div>

             {/* Row 2: Image Left, Text Right */}
             <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
               <div className="w-full md:w-1/2 order-1 md:order-1">
                 <div className="rounded-2xl overflow-hidden aspect-video shadow-xl hover:shadow-2xl transition-shadow duration-300">
                   <img src={img4} alt="Growth Meet Networking" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
               </div>
               <div className="w-full md:w-1/2 order-2 md:order-2">
                 <p className="text-gray-600 leading-relaxed text-lg font-medium">
                   The program covers a wide range of topics essential for startup growth and business development, including innovation and incubation support, enterprise creation, legal and regulatory compliances, government schemes and funding opportunities, market access strategies, e-commerce and quick-commerce models, branding, business expansion, investment readiness and growth management. Participants also gain exposure to entrepreneurial success stories, ecosystem resources and strategies for scaling ventures in competitive markets.
                 </p>
               </div>
             </div>

             {/* Row 3: Text Left, Image Right */}
             <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
               <div className="w-full md:w-1/2 order-2 md:order-1">
                 <p className="text-gray-600 leading-relaxed text-lg font-medium mb-6">
                   A key highlight of the program is its interactive learning environment, where entrepreneurs engage in discussions with experts, mentors, investors and ecosystem stakeholders. Through knowledge sharing, networking and collaborative dialogue, the program aims to strengthen entrepreneurial capabilities, encourage innovation-driven enterprises and foster sustainable economic and social impact.
                 </p>
               </div>
               <div className="w-full md:w-1/2 order-1 md:order-2">
                 <div className="rounded-2xl overflow-hidden aspect-video shadow-xl hover:shadow-2xl transition-shadow duration-300">
                   <img src={img5} alt="Growth Meet Mentorship" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
               </div>
             </div>

             {/* Row 4: Image Left, CTA Right */}
             <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 bg-emerald-50 rounded-[2rem] p-6 lg:p-8 border border-emerald-100">
               <div className="w-full md:w-1/2 order-1 md:order-1">
                 <div className="rounded-2xl overflow-hidden aspect-video shadow-md hover:shadow-xl transition-shadow duration-300 border-4 border-white">
                   <img src={img12} alt="Growth Meet Activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
               </div>
               <div className="w-full md:w-1/2 order-2 md:order-2 flex flex-col justify-center items-start md:pl-8">
                 <h3 className="text-2xl font-bold text-emerald-900 mb-4">See More Moments</h3>
                 <p className="text-emerald-700 leading-relaxed mb-8">
                   Explore our full gallery to see highlights, interactions, and key moments from our recent Startup Growth Meet events.
                 </p>
                 <Link to="/growth-meet-gallery" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 w-full sm:w-auto">
                   View Full Gallery <ArrowRight size={20} />
                 </Link>
               </div>
             </div>

           </div>

        </motion.div>
      </section>
    </div>
  );
};

export default GrowthMeet;
