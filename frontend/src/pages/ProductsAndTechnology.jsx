import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowUpRight, Package, Sprout, Users, ShieldCheck } from 'lucide-react';

// Static asset imports to ensure Vite bundles and resolves the paths correctly in production
import P1 from '../assets/Products/P1.jpg';
import P2 from '../assets/Products/P2.jpg';
import P3 from '../assets/Products/P3.jpg';
import P4 from '../assets/Products/P4.jpg';

// Animated Counter component
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

const ProductsAndTechnology = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Product data array using resolved static assets
  const productsData = [
    {
      id: 1,
      title: "Milk Enhancer in Animals",
      description: "We offer a complete line of herbal products, which are designed to support and boost general vitality, metabolic balance, and overall milk yield in dairy livestock using traditional formulations.",
      image_src: P1,
    },
    {
      id: 2,
      title: "Growth Promoter",
      description: "Growth promoter is a natural/herbal fertilizer, especially designed for organic farming modules to boost crop yield, strengthen plant immunity, and enrich overall soil microbes safely.",
      image_src: P2,
    },
    {
      id: 3,
      title: "Aphids, White Fly & Heliothis",
      description: "All varieties of crops have to get rid of pests. This targeted botanical formulation helps farmers control persistent sucking pests efficiently without harmful chemical residues left behind.",
      image_src: P3,
    },
    {
      id: 4,
      title: "Termite",
      description: "Herbal formulation effective against termite infestations in soil and standing crops, creating a protective repellent barrier around roots while keeping earth ecosystems safe.",
      image_src: P4,
    }
  ];

  // Filter products based on search query match
  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dynamic route redirection handler for individual item click
  const handleViewDetails = (id) => {
    // Navigate using react-router-dom to prevent page reload and 404 routing errors on static deploys
    navigate(`/products-technology/${id}`);
  };

  return (
    <div className="bg-gray-50 text-gray-700 min-h-screen relative overflow-hidden font-sans pb-24">
      
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
            SRISTI Innovations
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-6">
            Products & Technology
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed">
            Explore our collection of eco-friendly, herbal, and sustainable innovations commercialized for farmers and local communities.
          </p>
          <div className="w-24 h-1.5 bg-emerald-400 mx-auto mt-6 rounded-full shadow-sm"></div>
        </div>
      </div>

      {/* Unified Statistics Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-10 shadow-lg flex flex-col md:flex-row justify-around items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-150 gap-6 md:gap-0">
          {[
            { label: "Products & Tech", value: "10", suffix: "+", icon: Package, color: "text-emerald-600" },
            { label: "Grassroot Techs", value: "10", suffix: "+", icon: Sprout, color: "text-teal-600" },
            { label: "Farmers Impacted", value: "10", suffix: "K+", icon: Users, color: "text-green-600" },
            { label: "Eco-Friendly", value: "100", suffix: "%", icon: ShieldCheck, color: "text-blue-600" }
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

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Centralized Search Bar Layer */}
        <div className="max-w-md mx-auto mb-16 relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-5 pr-12 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-sm transition-all duration-200 text-sm font-medium"
          />
          <Search className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
        </div>

        {/* Full-width Cards Grid Container Layout */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-3xl bg-white shadow-sm max-w-3xl mx-auto">
            <p className="text-gray-500 font-medium">No products match your current search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white border border-gray-100 rounded-3xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Direct Product Image Container Frame */}
                  <div className="w-full h-48 rounded-2xl bg-gray-100 mb-5 overflow-hidden flex items-center justify-center border border-gray-100 relative">
                    {product.image_src ? (
                      <img 
                        src={product.image_src} 
                        alt={product.title} 
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 font-medium italic">Image Asset Space</span>
                    )}
                  </div>

                  {/* Core Copy Information Details */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {product.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* View Details Action Link trigger redirection */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-end">
                  <button 
                    onClick={() => handleViewDetails(product.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/btn cursor-pointer bg-transparent border-none"
                  >
                    View details 
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductsAndTechnology;