import React from 'react';
import { 
  Building, 
  Cpu, 
  Award, 
  FlaskConical, 
  Globe, 
  ChevronRight, 
  Lightbulb, 
  Users, 
  DollarSign 
} from 'lucide-react';
import incubatorImg from '../assets/SIIE-Sristi-Innovations2_aboutus.jpg';

const Incubator = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-700">
      
      {/* Page Header (Hero) */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Scientific Bio Labs"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 to-transparent"></div>
        </div>
        
        {/* Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30">
            SIIE - SRISTI BioNEST
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-6">
            BioNEST Incubator
          </h1>
          <div className="w-24 h-1.5 bg-emerald-400 mx-auto mt-6 rounded-full shadow-md"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        
        {/* Section 1: Overview & Collaboration */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-3/5 space-y-6 text-lg leading-relaxed text-gray-600">
            <h2 className="text-3xl font-extrabold text-emerald-900 leading-tight">
              Empowering Frugal & Scientific Ventures
            </h2>
            <p>
              SRISTI Innovations–BIRAC’s BioNEST is a business incubator funded by the Biotechnology Industry Research Assistance Council (BIRAC), Department of Biotechnology, Government of India. 
              Our incubator provides a nurturing, state-of-the-art environment for innovations emerging from out-of-the-box thinking, traditional knowledge systems, grassroots creativity, and university research.
            </p>
            <p>
              Located at the serene Grambharti Campus in Gandhinagar, the Sanctuary of Innovation, Incubation, and Entrepreneurship (SIIE) operates as a comprehensive platform. 
              We offer both physical and virtual (in situ and ex situ) incubation models, ensuring that creators from remote, rural areas can access institutional validation, advanced biological testing, and patenting resources without leaving their local ecosystems.
            </p>
            <div className="font-semibold text-emerald-800 border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50/70 rounded-r-xl">
              We bridge the gap between formal laboratory science and informal grassroots ingenuity, converting creative ideas into sustainable enterprises.
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 relative">
            <img 
              src={incubatorImg} 
              alt="SRISTI BioNEST Incubator Facility" 
              className="w-full h-auto object-cover rounded-[2.5rem] shadow-xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-250 rounded-[2.5rem] -z-10 hidden sm:block"></div>
          </div>
        </div>

        {/* Section 2: What We Offer */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Incubator Offerings</h2>
            <p className="text-gray-500 mt-4">We provide key services, infrastructure, and financial linkages to accelerate your technology development cycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Laboratories",
                desc: "Access fully equipped molecular biology, analytical testing, microbiology, and plant tissue culture labs to carry out validation and trials.",
                icon: FlaskConical
              },
              {
                title: "Mentorship & Validation",
                desc: "Get scientific inputs from expert scientists and product development mentoring from experienced entrepreneurs and industry leaders.",
                icon: Users
              },
              {
                title: "Funding Linkages",
                desc: "Gain entry to BIRAC funding schemes (SEED, LEAP, and BIG grants) alongside seed capitalization and investment connects.",
                icon: DollarSign
              },
              {
                title: "IPR & Patent Support",
                desc: "Receive professional guidance for searching patent databases, filing intellectual property applications, and handling legal compliance.",
                icon: Award
              },
              {
                title: "Fabrication & Prototyping",
                desc: "Work with engineering designers and workshops to build physical enclosures, custom tools, and pilot-scale machinery.",
                icon: Cpu
              },
              {
                title: "Direct Market Links",
                desc: "Introduce food and wellness products to customers via organic channels like Sattvik Traditional Food Festival and Khedut Haat.",
                icon: Globe
              }
            ].map((offering, idx) => {
              const Icon = offering.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-150 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{offering.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Infrastructure Showcase */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Infrastructure</h2>
            <p className="text-gray-500 mt-4">Take a look inside our high-tech laboratories and flexible co-working environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-150 flex flex-col justify-between">
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Molecular Biology Lab" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Wet & Analytical Lab Space</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">
                  Fully functional biotechnology workbenches equipped with high-precision instruments such as PCR machines, centrifuges, spectrophotometers, chromatography rigs, and deep refrigeration storage.
                </p>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Grambharti Campus, Gandhinagar
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-150 flex flex-col justify-between">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Co-Working Space" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Co-Working & Collaboration</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">
                  Shared hot-desking, high-speed Wi-Fi, private meeting cubicles, and dynamic conference rooms designed to foster collaborative learning, pitch presentations, and networking with visiting investors.
                </p>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Ahmedabad Office & Gandhinagar Incubator
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Incubation Roadmap */}
        <div className="bg-emerald-950 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="text-3xl font-bold">How to Join Us</h2>
            <p className="text-emerald-300/80 mt-3 text-sm">Follow our streamlined process to become a part of the SRISTI BioNEST family.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                step: "01",
                title: "Submit Proposal",
                desc: "Fill out our online application form describing your innovation, technology domain, and market potential."
              },
              {
                step: "02",
                title: "Technical Review",
                desc: "Present your solution to our scientific review board for technical feasibility and commercial viability assessment."
              },
              {
                step: "03",
                title: "Incubation Panel",
                desc: "Once approved, receive virtual/physical workspace, mentorship, funding support, and lab access."
              }
            ].map((stepInfo, idx) => (
              <div key={idx} className="relative space-y-4">
                <div className="text-5xl font-extrabold text-emerald-500/40 tracking-tight">{stepInfo.step}</div>
                <h3 className="text-xl font-bold">{stepInfo.title}</h3>
                <p className="text-emerald-100/70 text-sm leading-relaxed">{stepInfo.desc}</p>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-6 -right-4 w-8 text-emerald-500/30">
                    <ChevronRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16 relative z-10">
            <a 
              href="/our-startups" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
            >
              Apply for Incubation
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Incubator;
