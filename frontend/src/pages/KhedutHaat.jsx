import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tent } from 'lucide-react';
import forestAsset from "../assets/forest.jpeg";
import khedutHaat from "../assets/heroslider/khedut_haat.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const KhedutHaat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8fafc] text-gray-700 min-h-screen relative overflow-hidden font-sans">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-750/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header */}
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
            Prakrutik Khedut Haat
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed">
            A community-driven weekly farmers market connecting consumers directly with farmers who practice natural and chemical-free agriculture.
          </motion.p>
        </div>
      </div>

      <section className="relative z-20 -mt-12 md:-mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
         
           <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
             <img src={khedutHaat} alt="Khedut Haat" className="w-full h-full object-cover" />
           </div>
           
           <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8">Market Support By Prakrutik Khedut Haat</h2>
           <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium">
             <p>Khedut Haat is a community driven weekly farmers market designed to connect consumers directly with farmers who practice natural and chemical-free agriculture. By eliminating intermediaries, the platform enables farmers to sell their produce directly to buyers, ensuring they receive the full value of their hard work while offering consumers access to fresh, trustworthy and sustainably grown food.</p>
             <p>Beyond being a marketplace, Khedut Haat fosters meaningful relationships between farmers and consumers. The initiative encourages transparency, strengthens local food networks and promotes healthier food choices while supporting environmentally responsible farming practices.</p>
             <p>To uphold the authenticity of the produce sold through the market, the SRISTI Innovations team conducts regular farm visits and assessments. Farms are evaluated using 30-35 sustainability indicators that examine cultivation methods, resource use and adherence to natural farming principles. These field verifications help maintain quality standards, support farmers in continuing sustainable practices and provide consumers with confidence in the products they purchase.</p>
             <p>Today, Khedut Haat brings together nearly 120 farmers who collectively generate weekly sales exceeding ₹15 lakh. The markets are currently held at seven locations across Ahmedabad, Gandhinagar and Vallabh Vidyanagar, serving a growing network of conscious consumers. With plans to expand into Vadodara, Rajkot and Surat, the initiative aims to extend its impact to more farming communities and households.</p>
             <p>More than a weekly market, Khedut Haat represents a broader effort to strengthen sustainable agriculture, improve farmers’ livelihoods and build healthier, more resilient communities through direct farm-to-consumer engagement.</p>
             <div className="pt-6">
                <Link to="/khedut-haat-details" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-emerald-600 border border-transparent rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 shadow-md hover:shadow-lg">
                  Explore Khedut Haat Details
                </Link>
             </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default KhedutHaat;
