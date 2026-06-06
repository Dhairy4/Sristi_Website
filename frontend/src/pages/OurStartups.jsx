import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sprout, 
  Wrench, 
  ShieldCheck, 
  Activity, 
  Award, 
  Leaf, 
  Search, 
  ArrowUpRight, 
  Layers, 
  Calendar, 
  X, 
  CheckCircle,
  Briefcase,
  Users,
  Compass,
  FileCheck,
  User,
  Phone,
  Globe,
  DollarSign
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// Animated Counter component to calculate/increment numbers on every mount
const AnimatedCounter = ({ target, suffix = '', prefix = '', duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) {
      setCount(target);
      return;
    }
    
    const totalSteps = 50;
    const stepTime = duration / totalSteps;
    const increment = end / totalSteps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Mock Data Schema representing startup information.
// Designed to map directly to Pydantic models in FastAPI backend.
const MOCK_STARTUPS = [
  {
    id: 1,
    startup_name: "Shaligram Herbal Solutions",
    ownername: "Dr. Rajesh Kumar",
    description: "Developing validated herbal veterinary formulations to treat bovine mastitis naturally and reduce chemical antibiotic resistance.",
    startup_website: "https://shaligramherbs.example.com",
    contact_no: "+91 98765 43210",
    social_links: {
      x: "https://x.com/shaligramherbs",
      instagram: "https://instagram.com/shaligramherbs",
      facebook: "https://facebook.com/shaligramherbs"
    },
    logo_icon: "Sprout",
    sector: "Biotechnology",
    status: "Incubated",
    image_url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    startup_name: "Kisan Frugal Machinery",
    ownername: "Mansukhbhai Jagani",
    description: "Engineered the 'Bullet Santi' - a multi-purpose motorcycle-drawn tillage platform, alongside manual precision seed sowers for marginal farmers.",
    startup_website: "https://kisanfrugal.example.com",
    contact_no: "+91 94280 12345",
    social_links: {
      x: "https://x.com/kisanfrugal",
      youtube: "https://youtube.com/c/kisanfrugal",
      facebook: "https://facebook.com/kisanfrugal"
    },
    logo_icon: "Wrench",
    sector: "Grassroots Engineering",
    status: "Early Stage",
    image_url: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    startup_name: "BioGrassroots Biotech",
    ownername: "Dr. Anil Gupta",
    description: "Formulating microbial inoculants and soil probiotics that accelerate organic solid waste composting and enrich nutrient absorption.",
    startup_website: "https://biograssroots.example.com",
    contact_no: "+91 99099 88776",
    social_links: {
      instagram: "https://instagram.com/biograssroots",
      youtube: "https://youtube.com/c/biograssroots"
    },
    logo_icon: "Leaf",
    sector: "Biotechnology",
    status: "Incubated",
    image_url: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    startup_name: "Swasthya Diagnostic Tech",
    ownername: "Pooja Patel",
    description: "Creating paper-based diagnostic kits for on-field testing of crop diseases and rapid estimation of essential soil macronutrients.",
    startup_website: "https://swasthyadiag.example.com",
    contact_no: "+91 97243 55667",
    social_links: {
      x: "https://x.com/swasthya_diag",
      instagram: "https://instagram.com/swasthya_diag"
    },
    logo_icon: "Activity",
    sector: "Healthcare",
    status: "Incubated",
    image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    startup_name: "Nourish Organic Foods",
    ownername: "Sanjay Shah",
    description: "Processing climate-resilient millets and heritage grains into highly nutritious, gluten-free food products with direct farm-gate sourcing.",
    startup_website: "https://nourishorganic.example.com",
    contact_no: "+91 90990 11223",
    social_links: {
      facebook: "https://facebook.com/nourishorganic",
      youtube: "https://youtube.com/c/nourishorganic",
      instagram: "https://instagram.com/nourishorganic",
      x: "https://x.com/nourishorganic"
    },
    logo_icon: "Award",
    sector: "Agriculture & Food",
    status: "Graduated",
    image_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    startup_name: "GreenShield Therapeutics",
    ownername: "Kiran Vasava",
    description: "Validating traditional ayurvedic knowledge into scientific herbal formulations for chronic wound treatment and skin regeneration.",
    startup_website: "https://greenshieldrx.example.com",
    contact_no: "+91 98250 99887",
    social_links: {
      facebook: "https://facebook.com/greenshieldrx"
    },
    logo_icon: "ShieldCheck",
    sector: "Healthcare",
    status: "Incubated",
    image_url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
  }
];

const ICON_MAP = {
  Sprout: Sprout,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Activity: Activity,
  Award: Award,
  Leaf: Leaf
};

// Map of floating animation classes for staggered bobbing effects.
const FLOATING_ANIMATIONS = [
  "animate-float-1",
  "animate-float-2",
  "animate-float-3",
  "animate-float-4"
];

const OurStartups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedStartup, setSelectedStartup] = useState(null);

  // Unique Sectors list
  const sectors = useMemo(() => {
    const allSectors = MOCK_STARTUPS.map(s => s.sector);
    return ['All', ...new Set(allSectors)];
  }, []);

  // Filtered Startups
  const filteredStartups = useMemo(() => {
    return MOCK_STARTUPS.filter(startup => {
      const matchesSearch = startup.startup_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            startup.ownername.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'All' || startup.sector === selectedSector;
      return matchesSearch && matchesSector;
    });
  }, [searchTerm, selectedSector]);

  return (
    <div className="bg-gray-50 text-gray-700 min-h-screen relative overflow-hidden font-sans pb-24">
      
      {/* Inline styles for custom floating animations and pauses */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-13px); }
        }
        .animate-float-1 { animation: float1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float4 9s ease-in-out infinite; }
        
        .pause-float-on-hover:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-750/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Farming Greenery Background"
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30">
            SRISTI BioNEST Incubator
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-6">
            Our Startups
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed">
            Nurturing out-of-the-box thinking, grassroots ingenuity, and high-potential scientific startups.
          </p>
          <div className="w-24 h-1.5 bg-emerald-400 mx-auto mt-6 rounded-full shadow-sm"></div>
        </div>
      </div>

      {/* Unified Statistics Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-10 shadow-lg flex flex-col md:flex-row justify-around items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-150 gap-6 md:gap-0">
          {[
            { label: "Startups Incubated", value: "100", suffix: "+", icon: Briefcase, color: "text-emerald-600" },
            { label: "Patents Filed", value: "45", suffix: "+", icon: FileCheck, color: "text-teal-600" },
            { label: "Funding Catalyzed", value: "10", prefix: "₹", suffix: "Cr+", icon: DollarSign, color: "text-green-600" },
            { label: "Geographic Reach", value: "15", suffix: "+ States", icon: Compass, color: "text-blue-600" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-6 py-4 md:py-2"
              >
                <div className={`p-3 rounded-2xl bg-emerald-50 ${stat.color} flex-shrink-0`}>
                  <Icon size={28} />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-semibold mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter, Search & Directory Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 bg-white border border-gray-150 rounded-3xl p-6 shadow-sm">
          {/* Search bar */}
          <div className="relative flex-grow max-w-md">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search by name, owner, or tech..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-2xl py-3 pl-11 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder-gray-400 focus:ring-1 focus:ring-emerald-500/30 text-sm"
            />
          </div>

          {/* Sector Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all duration-300 ${
                  selectedSector === sector
                    ? 'bg-emerald-600 border-emerald-500 text-white shadow-sm shadow-emerald-650/10'
                    : 'bg-white border-gray-200 text-gray-500 hover:text-emerald-700 hover:border-emerald-200'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Startups Directory Grid */}
        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup, index) => {
              const Icon = ICON_MAP[startup.logo_icon] || Sprout;
              // Stagger floating animations based on index
              const animClass = FLOATING_ANIMATIONS[index % FLOATING_ANIMATIONS.length];

              return (
                <div
                  key={startup.id}
                  className={`bg-white/90 backdrop-blur-md border border-gray-200 rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:border-emerald-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] pause-float-on-hover ${animClass}`}
                >
                  <div>
                    {/* Header: Logo placeholder and badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                        <Icon size={28} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 tracking-wide">
                        {startup.sector}
                      </span>
                    </div>

                    {/* Startup Info */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-emerald-700 transition-colors">
                      {startup.startup_name}
                    </h3>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <User size={14} className="text-emerald-600" /> Lead: {startup.ownername}
                    </p>
                    <p className="text-gray-500 leading-relaxed text-sm mb-6">
                      {startup.description}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Status: <span className="text-emerald-600">{startup.status}</span>
                    </span>
                    <button
                      onClick={() => setSelectedStartup(startup)}
                      className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-colors group cursor-pointer"
                    >
                      View Project
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-gray-150 rounded-3xl shadow-sm">
            <p className="text-gray-400 text-lg">No startups match your search terms.</p>
          </div>
        )}

      </div>

      {/* MODAL: Startup Detail View (Larger and Scrollable) */}
      {selectedStartup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative bg-white border border-gray-200 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto">
              
              {/* Modal Image Header */}
              <div className="h-64 md:h-80 relative">
                <img 
                  src={selectedStartup.image_url} 
                  alt={selectedStartup.startup_name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                <button
                  onClick={() => setSelectedStartup(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-white/90 hover:bg-white border border-gray-200 text-gray-500 hover:text-emerald-600 transition-colors shadow-sm cursor-pointer"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-6 left-6 md:left-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-md shadow-emerald-600/20 uppercase tracking-wider">
                    {selectedStartup.sector}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">{selectedStartup.startup_name}</h2>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 md:p-10 space-y-8">
                
                {/* 1 & 2: Startup Name & Owner name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Startup name</h4>
                    <p className="text-xl font-bold text-gray-900">{selectedStartup.startup_name}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Owner Name</h4>
                    <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <User size={20} className="text-emerald-600" />
                      {selectedStartup.ownername}
                    </p>
                  </div>
                </div>

                {/* 3: Description */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {selectedStartup.description}
                  </p>
                  <p className="text-gray-650 leading-relaxed text-base mt-4 bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100/50">
                    <span className="font-semibold text-emerald-800 block mb-1">Technical Innovation Details:</span>
                    {selectedStartup.innovation_detail}
                  </p>
                </div>

                {/* 4 & 5: Startup Website & Contact no */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 pb-6 border-b border-gray-100">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Startup Website</h4>
                    <a 
                      href={selectedStartup.startup_website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-4 decoration-emerald-200 transition-colors"
                    >
                      <Globe size={18} />
                      {selectedStartup.startup_website}
                    </a>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contact No</h4>
                    <p className="text-gray-900 font-semibold flex items-center gap-2">
                      <Phone size={18} className="text-emerald-600" />
                      {selectedStartup.contact_no}
                    </p>
                  </div>
                </div>

                {/* 6: Social Links (Rendered dynamically: X, YouTube, Instagram, Facebook if exists) */}
                {selectedStartup.social_links && Object.keys(selectedStartup.social_links).length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Social Handles</h4>
                    <div className="flex gap-4">
                      {selectedStartup.social_links.x && (
                        <a 
                          href={selectedStartup.social_links.x} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-12 h-12 rounded-xl bg-gray-50 hover:bg-black hover:text-white border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-105 shadow-sm"
                          title="X / Twitter"
                        >
                          <FaTwitter size={20} />
                        </a>
                      )}
                      {selectedStartup.social_links.youtube && (
                        <a 
                          href={selectedStartup.social_links.youtube} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-12 h-12 rounded-xl bg-gray-50 hover:bg-red-600 hover:text-white border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-105 shadow-sm"
                          title="YouTube"
                        >
                          <FaYoutube size={20} />
                        </a>
                      )}
                      {selectedStartup.social_links.instagram && (
                        <a 
                          href={selectedStartup.social_links.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-12 h-12 rounded-xl bg-gray-55 hover:bg-pink-600 hover:text-white border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-105 shadow-sm"
                          title="Instagram"
                        >
                          <FaInstagram size={20} />
                        </a>
                      )}
                      {selectedStartup.social_links.facebook && (
                        <a 
                          href={selectedStartup.social_links.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-12 h-12 rounded-xl bg-gray-55 hover:bg-blue-600 hover:text-white border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-105 shadow-sm"
                          title="Facebook"
                        >
                          <FaFacebook size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Modal Bottom Sticky Controls */}
            <div className="bg-gray-50 px-6 md:px-10 py-5 border-t border-gray-150 flex justify-end gap-3 flex-shrink-0">
              <button
                onClick={() => setSelectedStartup(null)}
                className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl transition-colors cursor-pointer text-sm"
              >
                Close
              </button>
              <a 
                href={selectedStartup.startup_website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-sm cursor-pointer text-sm"
              >
                Launch Project
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default OurStartups;
