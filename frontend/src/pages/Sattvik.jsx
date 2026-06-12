import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import forestAsset from "../assets/forest.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Sattvik = () => {
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
            Sattvik Food Festival
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed">
            A flagship community celebration honoring India’s traditional knowledge, agro-biodiversity, and grassroots innovation spirit.
          </motion.p>
        </div>
      </div>

      <section className="relative z-20 -mt-12 md:-mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
             
           <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
             <img src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80" alt="Sattvik" className="w-full h-full object-cover" />
           </div>
           
           <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8">SATTVIK</h2>
           <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium">
             <p>The Sattvik Traditional Food Festival is a flagship community celebration organized annually by SRISTI in collaboration with the Honey Bee Network. Established over two decades ago in Ahmedabad, Gujarat, this festival was born out of a deep reverence for India’s traditional knowledge, agro-biodiversity and the unyielding spirit of grassroots innovators and organic farmers across the nation.</p>
             <p>Sattvik envisages creating a harmonious bridge between conscious urban consumers and the custodians of our rural heritage. The festival provides a vibrant marketplace and a collaborative platform for farmers, tribal communities and local artisans to showcase nutrient-rich, forgotten crops such as minor millets, grains and wild uncultivated vegetables and transform them into wholesome, traditional culinary delicacies.</p>
             <p>Beyond celebrating the flavors of our roots, Sattvik offers comprehensive visibility and support to rural minds by hosting a dedicated grassroots innovation exhibition and an Khedut haat. By blending the warmth of regional food traditions with the brilliance of indigenous ingenuity, the festival fosters a sustainable ecosystem that promotes nutritional health, ensures fair economic returns to marginalized farmers and preserves India’s rich cultural and ecological diversity for generations to come.</p>
            <div className="pt-6">
                <Link to="https://sattvik.sristi.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-emerald-600 border border-transparent rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 shadow-md hover:shadow-lg">
                  Visit Sattvik
                </Link>
          </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Sattvik;
