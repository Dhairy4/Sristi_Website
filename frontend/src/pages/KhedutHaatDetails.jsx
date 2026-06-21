import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Tent, MapPin, CheckCircle, Info, Users, Phone, Sprout, LineChart, Leaf, Star, BookOpen, Download, Eye, ExternalLink, Package } from 'lucide-react';
import forestAsset from "../assets/forest.jpeg";
import khedutHaatImg from "../assets/For_Objectives_About us.jpg";

// Import 12 location images
import locSPU from "../assets/Khedut Haat/SPU.jpeg";
import locSarvaV from "../assets/Khedut Haat/SarvaV.jpeg";
import locBAOU from "../assets/Khedut Haat/BAOU.jpeg";
import locNavJeevan from "../assets/Khedut Haat/NavJeevan.jpeg";
import locVidyapeeth from "../assets/Khedut Haat/vidyapeeth.jpeg";
import locAtmaVikas from "../assets/Khedut Haat/AtmaVikas.jpeg";
import locHimmatnagar from "../assets/Khedut Haat/canalfront.jpeg";
import locVadodara from "../assets/Khedut Haat/MMU.jpeg";
import locSristi from "../assets/Khedut Haat/sristitrust.jpeg";
import locModasa from "../assets/Khedut Haat/Annpurna.jpeg";
import locNadiad from "../assets/Khedut Haat/ChetakP.jpeg";
import locVastrapur from "../assets/Khedut Haat/WhatsApp Image 2026-06-09 at 11.35.50 AM.jpeg";

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

// Animated Counter Component using IntersectionObserver and requestAnimationFrame
const AnimatedCounter = ({ end, suffix = "", duration = 1500 }) => {
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

  return <span ref={counterRef}>{count}{suffix}</span>;
};

const KhedutHaatDetails = () => {
  const [isDflipReady, setIsDflipReady] = useState(false);
  const [isLoadingDflip, setIsLoadingDflip] = useState(false);
  const flipBookRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadStyle = (href, id) => {
      if (document.getElementById(id)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.id = id;
      document.head.appendChild(link);
    };

    // Ensure the permanent hidden div exists in document.body outside React root
    let container = document.getElementById('dflip-container-permanent');
    if (!container) {
      container = document.createElement('div');
      container.id = 'dflip-container-permanent';
      container.style.display = 'none';
      container.innerHTML = `<div class="_df_thumb" id="df_13231" data-title="Khedut Haat Brochure" wpoptions="true" thumb="/haatThumb.jpg">Khedut Haat Brochure</div>`;
      document.body.appendChild(container);
    }

    setIsLoadingDflip(true);

    // 1. Load jQuery
    loadScript('/dflip/js/libs/jquery.min.js', 'jquery-script')
      .then(() => {
        // 2. Load DearFlip stylesheet
        loadStyle('/dflip/css/dflip.min.css', 'dflip-style');
        
        // 3. Load DearFlip script
        return loadScript('/dflip/js/dflip.min.js', 'dflip-script');
      })
      .then(() => {
        // 4. Configure DearFlip settings
        window.dFlipLocation = '/dflip/';
        
        window.dFlipWPGlobal = {
          text: {
            toggleSound: "Turn on/off Sound",
            toggleThumbnails: "Toggle Thumbnails",
            toggleOutline: "Toggle Outline/Bookmark",
            previousPage: "Previous Page",
            nextPage: "Next Page",
            toggleFullscreen: "Toggle Fullscreen",
            zoomIn: "Zoom In",
            zoomOut: "Zoom Out",
            toggleHelp: "Toggle Help",
            singlePageMode: "Single Page Mode",
            doublePageMode: "Double Page Mode",
            downloadPDFFile: "Download PDF File",
            gotoFirstPage: "Goto First Page",
            gotoLastPage: "Goto Last Page",
            share: "Share",
            mailSubject: "I wanted you to see this FlipBook",
            mailBody: "Check out this site {{url}}",
            loading: "DearFlip: Loading "
          },
          viewerType: "flipbook",
          moreControls: "download,pageMode,sound",
          hideControls: "",
          scrollWheel: "false",
          backgroundColor: "#777",
          backgroundImage: "",
          height: "auto",
          paddingLeft: "20",
          paddingRight: "20",
          controlsPosition: "bottom",
          duration: 800,
          soundEnable: "true",
          soundFile: "sound/turn2.mp3",
          enableDownload: "true",
          showSearchControl: "false",
          showPrintControl: "false",
          enableAnnotation: false,
          enableAnalytics: "false",
          webgl: "true",
          hard: "none",
          maxTextureSize: "1600",
          rangeChunkSize: "524288",
          zoomRatio: 1.5,
          stiffness: 3,
          pageMode: "0",
          singlePageMode: "0",
          pageSize: "0",
          autoPlay: "false",
          autoPlayDuration: 5000,
          autoPlayStart: "false",
          linkTarget: "2",
          sharePrefix: "flipbook-"
        };

        window.option_df_13231 = {
          outline: [],
          autoEnableOutline: "false",
          autoEnableThumbnail: "false",
          overwritePDFOutline: "false",
          direction: "1",
          pageSize: "0",
          source: "/Khedut-Haat-Brochure.pdf",
          wpOptions: "true",
          soundFile: "sound/turn2.mp3"
        };

        // Parse book elements
        if (window.DFLIP && window.DFLIP.parseBooks) {
          window.DFLIP.parseBooks();
        }

        setIsDflipReady(true);
        setIsLoadingDflip(false);
      })
      .catch((err) => {
        console.error("Failed to load DearFlip library:", err);
        setIsLoadingDflip(false);
      });

    return () => {
      const el = document.getElementById('dflip-container-permanent');
      if (el) {
        el.remove();
      }
    };
  }, []);

  const handleReadOnline = () => {
    const el = document.getElementById('df_13231');
    if (isDflipReady && el) {
      el.click();
    } else {
      window.open("/Khedut-Haat-Brochure.pdf", "_blank");
    }
  };

  const locations = [
    { 
      text: "Sardar Patel University (SPU), At Bhaikaka Library Campus, Opposite Shastri Maidan, Vallabh Vidyanagar", 
      img: locSPU,
      mapLink: "https://maps.google.com/maps?q=Sardar%20Patel%20University%20%28SPU%29%2C%20mota%20Bazaar%2C%20Vallabh%20Vidyanagar%2C%20Anand%2C%20Gujarat"
    },
    { 
      text: "Sarva Vidyalaya Kelavani Mandal (Kadi campus), Pharmacy Campus, Near GH-6 Circle, Gandhinagar", 
      img: locSarvaV,
      mapLink: "https://maps.app.goo.gl/iL7kxssScGb6B52J6"
    },
    { 
      text: "Babasaheb Ambedkar Open University (BAOU) Campus, Sarkhej-Gandhinagar Highway, Charodi, Ahmedabad", 
      img: locBAOU,
      mapLink: "https://maps.google.com/maps?q=Jyotirmay%20Parisar%2C%20Sarkhej-Gandhinagar%20Highway%2C%20Chharodi%2C%20Ahmedabad"
    },
    { 
      text: "Navjeevan Trust Campus, Behind Gujarat Vidyapith, Near Income Tax Circle, Ashram Road, Ahmedabad", 
      img: locNavJeevan,
      mapLink: "https://maps.google.com/maps?q=2HV8%2B89R%2C%20Post%20Navajivan%20Behind%20Vidyapeeth%2C%20Ashram%20Rd%2C%20Ahmedabad"
    },
    { 
      text: "Shri Bhagwat Vidyapith, Mandir Campus, Sola, SG Highway, Ahmedabad", 
      img: locVidyapeeth,
      mapLink: "https://maps.google.com/maps?q=SHRI%20BHAGWAT%20VIDHYAPITH%2C%20Bhagwat%20Vidyapith%20Rd%2C%20Sola%2C%20Ahmedabad"
    },
    { 
      text: "Atma Vikas Campus, Behind Electotherm, In Vraj-Gopi Bungalow Lane Palodia, Ahmedabad", 
      img: locAtmaVikas,
      mapLink: "https://maps.google.com/maps?q=Aatmavikas%2C%20Vraj%20Gopi%20Bunglow%2C%20Behind%20Electrotherm%2C%20Lane%2C%20Palodia"
    },
    { 
      text: "Canal Front Food Court, Keshav Municipal Market, Near Namaste Circle, Mahaveer Nagar, Himmatnagar", 
      img: locHimmatnagar,
      mapLink: "https://maps.google.com/maps?q=Mahavirnagar%20Circle%2C%20Himatnagar"
    },
    { 
      text: "Faculty of Commerce (M.S. University), Main Building, Near Kalaghoda, Station Road, Sayajiganj, Vadodara", 
      img: locVadodara,
      mapLink: "https://maps.google.com/maps?q=Faculty%20of%20Commerce%2C%20M.%20S.%20University%20of%20Baroda%2C%20Vadodara"
    },
    { 
      text: "SRISTI Campus, AES Boys Hostel Campus, Beside AES Sports Ground, Near Gujarat University, Ahmedabad", 
      img: locSristi,
      mapLink: "https://maps.google.com/maps?q=AES%20Boys%20Hostel%20Campus%2C%20Navrangapura%2C%20Ahmedabad"
    },
    {
      text: "Annapurna Trust, Malpur Road, Modasa",
      img: locModasa,
      mapLink: "https://maps.google.com/maps?q=Malpur%20Road%2C%20Modasa"
    },
    {
      text: "Chetak Petrol Pump Campus, Santram Road, Nadiad",
      img: locNadiad,
      mapLink: "https://maps.google.com/maps?q=Chetak%20Petrol%20Pump%2C%20Santram%20Road%2C%20Nadiad"
    },
    {
      text: "AMC Plot, Vastrapur Lake, Opposite Gate No-1, Vastrapur, Ahmedabad",
      img: locVastrapur,
      mapLink: "https://maps.google.com/maps?q=Vastrapur%20Lake%2C%20Ahmedabad"
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-gray-700 min-h-screen relative overflow-hidden font-sans">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-750/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={forestAsset} alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 hover:scale-100 transition-transform duration-[3s]" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30 mb-8 backdrop-blur-sm">
            <Tent size={16} />
            Marketplace
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            SRISTI Prakrutik Khedut Haat
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto text-emerald-100 text-lg md:text-xl leading-relaxed font-light">
            A community-driven weekly farmers market connecting consumers directly with farmers who practice natural and chemical-free agriculture.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24 relative z-20 -mt-12">
        
        {/* About Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-emerald-50/50 backdrop-blur-xl flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                 <Info size={28} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">About Khedut Haat</h2>
            </div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>Khedut Haat is a weekly farmers’ market that creates a direct bridge between organic farmers and consumers. It provides a transparent, farmer-friendly platform where producers sell their fresh, chemical-free produce without the involvement of middlemen.</p>
              <p>To maintain credibility and trust, the SRISTI Innovations team regularly conducts on-field farm verifications based on 30–35 sustainability parameters. These assessments document farming methods, validate adherence to natural practices, and ensure that consumers receive authentic products.</p>
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 italic">
                "Currently, around 120 farmers are associated with Khedut Haat, collectively generating sales of over ₹15 lakhs every week."
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative group">
            <div className="absolute inset-0 bg-emerald-600 rounded-[2rem] transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            <img src={khedutHaatImg} alt="Khedut Haat" className="relative w-full h-[400px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2" />
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 inline-flex items-center gap-3">
              Key Highlights
            </h2>
          </div>

          {/* Stats / Impact Panel at the top of highlights section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {[
              { label: "Total Khedut Haats Organized", value: 412, suffix: "+", icon: Tent, color: "text-emerald-600" },
              { label: "Total Products Available", value: 400, suffix: "+", icon: Package, color: "text-teal-600" },
              { label: "Total Annual Revenue Generated (Rs.)", value: 6, suffix: "Cr+", icon: LineChart, color: "text-green-600" },
              { label: "Farmers Associated", value: 125, suffix: "+", icon: Users, color: "text-emerald-600" },
              { label: "Incubatees & SHGs Associated", value: 35, suffix: "+", icon: Sprout, color: "text-teal-600" },
              { label: "Weekly Customer Visits", value: 4000, suffix: "+", icon: Eye, color: "text-green-600" }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-5"
                >
                  <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                    <Icon size={26} />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-semibold mt-1 tracking-wide leading-tight">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Organic & Chemical-Free", desc: "Offers naturally grown fruits, vegetables, pulses, and oils free from harmful chemicals.", icon: <Leaf size={24}/> },
              { title: "Farmer Empowerment", desc: "Farmers directly connect with consumers, ensuring fair prices and eliminating middlemen.", icon: <Users size={24}/> },
              { title: "Economic Impact", desc: "Generates significant weekly sales, boosting farmers’ incomes and improving rural livelihoods.", icon: <LineChart size={24}/> },
              { title: "Youth & Startups", desc: "Students and startups showcase innovative products, encouraging local entrepreneurship.", icon: <Sprout size={24}/> },
              { title: "Sustainability", desc: "Promotes eco-friendly agriculture, healthier lifestyles, and resilient local food systems.", icon: <CheckCircle size={24}/> }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Our Locations
            </h2>
            <p className="text-emerald-700 font-medium text-lg md:text-xl max-w-3xl mx-auto italic">
              "તમામ ખેડૂત મિત્રોનો ખૂબ ખૂબ આભાર, <br></br>જેઓ કુદરતી ખેતી દ્વારા લોકોના સ્વાસ્થ્ય અને પર્યાવરણની રક્ષા કરે છે."
            </p>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Visit us at any of our 12 active markets across Gujarat
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={loc.img} alt={`Location ${idx + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between bg-white relative z-20">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 font-medium leading-relaxed">{loc.text}</p>
                  </div>
                  <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-500 text-emerald-700 hover:text-white font-semibold rounded-xl text-center transition-colors duration-300 flex items-center justify-center gap-2">
                    <MapPin size={18} />
                    View on Map
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Cards (Working System & Role) */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Working System */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-emerald-900 rounded-[2.5rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <div className="p-3 bg-emerald-800/50 rounded-xl backdrop-blur-sm"><CheckCircle size={28} className="text-emerald-300"/></div>
                Our Working System
              </h3>
              <div className="space-y-6 text-emerald-50 text-lg leading-relaxed">
                <p>Farmers are selected only after rigorous physical verification of their farms, ensuring adherence to natural, organic, or bio-farming standards.</p>
                <p>Only those who have been practicing completely natural and chemical-free farming for the past three years are allowed to sell their produce at the haat.</p>
                <div className="bg-emerald-800/40 p-5 rounded-2xl border border-emerald-700/50 backdrop-blur-sm">
                  <p className="italic text-emerald-200">"Priority is given to rural farmers or their certified groups who are personally involved in farming and whose primary livelihood depends on natural farming."</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Role of SRISTI */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-xl border border-gray-100 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><Tent size={28} /></div>
              Role of SRISTI Innovations
            </h3>
            <p className="text-gray-600 text-lg mb-6">SRISTI Innovations organization continuously and systematically manages various aspects of the Haat:</p>
            <ul className="space-y-4">
              {[
                "Planning, coordination, and promotion",
                "Regular farm verification and validation",
                "Selection and training of farmers",
                "Continuous guidance for chemical-free farming",
                "Laboratory research on farmers’ issues",
                "Consumer awareness activities",
                "Customer care and feedback management"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* Brochure Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUp} 
          className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-[2.5rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative backgrounds */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-700/25 rounded-full blur-[100px] -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/45 rounded-full blur-[100px] -ml-20 -mb-20"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/25 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/20">
                <BookOpen size={14} />
                Official Publication
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Khedut Haat Brochure</h2>
              <p className="text-emerald-100 text-lg leading-relaxed max-w-2xl font-light">
                Discover more about the weekly farmers' market initiative, our detailed farm verification parameters, quality control standards, and organic farming guidelines. Access the official brochure to learn how we support sustainable livelihoods.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={handleReadOnline}
                  disabled={isLoadingDflip}
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center gap-2 transform hover:-translate-y-0.5 animate-pulse-subtle"
                >
                  {isLoadingDflip ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Loading Viewer...
                    </>
                  ) : (
                    <>
                      <Eye size={20} />
                      Read Online
                    </>
                  )}
                </button>
                <a 
                  href="/Khedut-Haat-Brochure.pdf" 
                  download="Khedut-Haat-Brochure.pdf"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/25 flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Download size={20} />
                  Download PDF
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center">
              <div 
                onClick={handleReadOnline}
                className="relative group cursor-pointer w-150 md:w-150  rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 border-4 border-white/20 hover:border-emerald-400/50"
              >
                <div className="absolute inset-0 bg-emerald-950/30 group-hover:bg-transparent transition-colors z-10 duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 group-hover:bg-emerald-500 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transition-all transform group-hover:scale-110 duration-500 opacity-80 group-hover:opacity-100">
                    <BookOpen size={28} />
                  </div>
                </div>
                <img 
                  src="/haatThumb.jpg" 
                  alt="Khedut Haat Brochure Cover" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
                  onError={(e) => {
                    e.target.src = khedutHaatImg; 
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Footer Banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="md:w-1/2">
               <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                 <Phone className="text-emerald-600" />
                 Contact & Feedback
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 Your valuable suggestions help make the management of SRISTI Prakrutik Khedut Haat more efficient and transparent. We always welcome customer feedback.
               </p>
               <a href="https://wa.me/+919510386635" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-semibold rounded-full transition-colors">
                 WhatsApp: +91 9510386635
               </a>
             </div>
             <div className="md:w-1/2 p-8 bg-gray-50 rounded-3xl border border-gray-100 w-full">
               <h3 className="text-xl font-bold text-gray-900 mb-4">Address of Organizing Institution</h3>
               <p className="text-gray-600 leading-relaxed mb-4">
                 <strong>SRISTI</strong><br />
                 Inside AES Boys Hostel Campus,<br />
                 Opposite Arpan Baby Care Hospital, next to Sports Complex,<br />
                 Near Gujarat University, Ahmedabad – 380009
               </p>
               <p className="text-gray-600 leading-relaxed">
                 <span className="font-medium text-gray-900">Phone:</span> (0) 079 27913293<br />
                 <span className="font-medium text-gray-900">Mobile:</span> +91 9510386635 / +91 9825061139<br />
                 <span className="font-medium text-gray-900">Email:</span> info@sristi.org
               </p>
             </div>
           </div>
        </motion.div>

      </div>

    </div>
  );
};

export default KhedutHaatDetails;
