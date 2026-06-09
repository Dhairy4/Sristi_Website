import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import forestAsset from "../assets/forest.jpeg";

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

      <section className="relative z-20 -mt-12 md:-mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
           <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm">
              <Download size={28} />
           </div>
           
           <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8">STARTUP GROWTH MEET</h2>
           <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium">
             <p>Entrepreneur & Startup Growth Meet is a dynamic platform designed to empower aspiring entrepreneurs, startup founders, innovators and small business owners by providing practical insights into the entrepreneurial ecosystem. The program creates opportunities for participants to learn from industry experiences, understand emerging market trends and explore pathways for transforming innovative ideas into sustainable enterprises.</p>
             <p>The program covers a wide range of topics essential for startup growth and business development, including innovation and incubation support, enterprise creation, legal and regulatory compliances, government schemes and funding opportunities, market access strategies, e-commerce and quick-commerce models, branding, business expansion, investment readiness and growth management. Participants also gain exposure to entrepreneurial success stories, ecosystem resources and strategies for scaling ventures in competitive markets.</p>
             <p>A key highlight of the program is its interactive learning environment, where entrepreneurs engage in discussions with experts, mentors, investors and ecosystem stakeholders. Through knowledge sharing, networking and collaborative dialogue, the program aims to strengthen entrepreneurial capabilities, encourage innovation-driven enterprises and foster sustainable economic and social impact.</p>
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GrowthMeet;
