import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, User, ArrowUpRight } from 'lucide-react';
import forestAsset from "../assets/forest.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Import all logos from the assets folder using Vite's glob import
const logoModules = import.meta.glob('../assets/our_startup/logo/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const logoUrls = Object.keys(logoModules).reduce((acc, key) => {
  const filename = key.split('/').pop();
  acc[filename] = logoModules[key].default;
  return acc;
}, {});

const FEATURED_STARTUPS = [
  {
    id: 3,
    name: "Sattvanik honey",
    owner: "Hardik Godad",
    category: "Agri & Lifestyle Entrepreneur",
    logoFile: "sattvahik.png",
    description: "Sattvanik Honey is a premium honey brand based in Ahmedabad, Gujarat, founded by Hardik Godad (B.Sc. Agriculture) with a vision to provide pure, natural and ethically sourced raw honey directly from beekeepers and farms. Sattvanik Honey is committed to delivering honey in its most authentic and unprocessed form while preserving its natural nutrients, aroma and medicinal properties."
  },
  {
    id: 6,
    name: "Krushimool",
    owner: "kevin Lungariya",
    category: "Agri & Lifestyle Entrepreneur",
    logoFile: "krishimool.png",
    description: "Krushimool is a Gujarat-based natural food and agri-brand dedicated to reviving India’s traditional food culture through naturally grown, minimally processed, and region-specific agricultural products. The brand works directly with farmers to promote sustainable agriculture, indigenous crops, and healthy food practices while ensuring fair value for farming communities."
  },
  {
    id: 7,
    name: "Ayurvidhan research and development",
    owner: "Kuldeep Sharma",
    category: "Agri & Lifestyle Entrepreneur",
    logoFile: "neti_neti.png",
    description: "Neti-Neti Toothpaste is a natural toothpaste made for people who prefer simple, plant based oral care products. It contains ingredients such as soapnut, hemp seed oil, clove extract and stevia leaf extract, which are commonly used for their cleansing and oral care properties. The product is vegan, cruelty free and free from many synthetic ingredients found in traditional toothpastes."
  },
  {
    id: 17,
    name: "Affinito",
    owner: "Nishant Patel",
    category: "BioNest",
    logoFile: "affinito.png",
    description: "Affinito is a premium freeze-dried food brand based in Anand, Gujarat, dedicated to delivering high-quality, nutritious and innovative food products. The company specializes in advanced freeze-drying technology that preserves the natural taste, aroma, texture and nutritional value of fruits, vegetables, herbs and other food ingredients."
  },
  {
    id: 21,
    name: "Kapes Care",
    owner: "Pratibha Mathvara",
    category: "BioNest",
    logoFile: "kapscare.png",
    description: "Kapes Care is a healthcare and wellness company based in Ahmedabad, Gujarat, dedicated to providing high-quality personal care, cosmetic, skincare, hygiene, and wellness products. The company focuses on creating safe, effective, and reliable solutions by combining scientific knowledge, quality ingredients, and modern manufacturing practices."
  },
  {
    id: 22,
    name: "Suncoco",
    owner: "Akshar Visani",
    category: "BioNest",
    logoFile: "suncoco.png",
    description: "Suncoco is a premium cocoa and wellness-focused food brand dedicated to creating clean, honest, and nourishing chocolate experiences using real cocoa and natural ingredients. The brand focuses on delivering rich, flavorful, and healthier alternatives to conventional chocolate products by avoiding artificial additives, preservatives, palm oil, and refined sugar."
  }
];

const Incubatees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8fafc] text-gray-700 min-h-screen relative overflow-hidden font-sans pb-24">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-750/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={forestAsset} alt="Background" className="w-full h-full object-cover opacity-35 mix-blend-overlay scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30 mb-8 backdrop-blur-sm">
            <Briefcase size={16} />
            SIIE-SRISTI BioNEST
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Our Incubatees
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto text-emerald-100 text-lg md:text-xl leading-relaxed font-light">
            Meet the innovative startups and grassroots entrepreneurs supported by our BioNEST incubator ecosystem.
          </motion.p>
        </div>
      </div>

      {/* Featured Startups Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Top Featured Incubatees</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Discover key ventures driving impact in bio-tech, organic food, and grassroots innovations.</p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURED_STARTUPS.map((startup) => {
            const logoUrl = logoUrls[startup.logoFile];
            return (
              <motion.div 
                key={startup.id} 
                variants={fadeUp} 
                className="group bg-white rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:border-emerald-300 border border-gray-200 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)] shadow-lg cursor-pointer"
              >
                <Link to={`/our-startups?startup=${startup.id}`} className="flex flex-col h-full justify-between">
                  <div>
                    {/* Brand Logo or Icon */}
                    <div className="flex justify-between items-start mb-6">
                      {logoUrl ? (
                        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-150 flex items-center justify-center p-2 shadow-sm transition-transform group-hover:scale-105 duration-300">
                          <img 
                            src={logoUrl} 
                            alt={`${startup.name} Logo`} 
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                          <Briefcase size={24} />
                        </div>
                      )}
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-250 uppercase tracking-wider">
                        {startup.category}
                      </span>
                    </div>

                    {/* Startup Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {startup.name}
                    </h3>

                    {/* Lead info */}
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <User size={14} className="text-emerald-650" /> Lead: {startup.owner}
                    </p>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed text-sm line-clamp-4">
                      {startup.description}
                    </p>
                  </div>

                  {/* CTA link */}
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-emerald-700 group-hover:text-emerald-600 font-bold transition-colors">
                    <span>Learn More About Startup</span>
                    <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Startups CTA Banner */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="mt-20 bg-emerald-950 text-white rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Explore Our Entire Portfolio</h3>
            <p className="text-emerald-200/80 text-sm leading-relaxed">
              We support over 100+ startups across multiple categories, including agriculture, life sciences, bio-technology, food processing, and eco-friendly innovations.
            </p>
            <div className="pt-4">
              <Link 
                to="/our-startups" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                Browse All Startups
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Incubatees;
