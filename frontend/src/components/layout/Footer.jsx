import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import sristiLogo from '../../assets/Sristi-innovation-logo.jpg';
import honeyBeeLogo from '../../assets/Honey-Bee-logo.jpg';
import sristiPartnerLogo from '../../assets/sristi-logo.jpg';
import biracLogo from '../../assets/birac-logo.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About Section */}
          <div className="lg:pr-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img 
                src={sristiLogo} 
                alt="SRISTI Innovation" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 bg-white p-2 rounded-xl" 
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              Society for Research and Initiatives for Sustainable Technologies and Institutions. 
              Empowering grassroots innovators and protecting their intellectual property rights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-sristi-green-600 hover:text-white transition-all duration-300"><FaFacebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-sristi-green-600 hover:text-white transition-all duration-300"><FaTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-sristi-green-600 hover:text-white transition-all duration-300"><FaInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-sristi-green-600 hover:text-white transition-all duration-300"><FaLinkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-sristi-green-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Incubator', 'Startups', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`} 
                    className="flex items-center text-gray-400 hover:text-sristi-green-400 transition-colors group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Our Partners
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-sristi-green-600 rounded-full"></span>
            </h3>
            <div className="flex flex-wrap gap-4">
              <a href="https://honeybee.org/" className="bg-white p-2 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center w-20 h-20">
                <img src={honeyBeeLogo} alt="Honey Bee Network" className="max-h-full max-w-full object-contain" />
              </a>
              <a href="https://www.sristi.org/" className="bg-white p-2 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center w-20 h-20">
                <img src={sristiPartnerLogo} alt="SRISTI" className="max-h-full max-w-full object-contain" />
              </a>
              <a href="https://birac.nic.in/" className="bg-white p-2 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center w-20 h-20">
                <img src={biracLogo} alt="BIRAC" className="max-h-full max-w-full object-contain" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-sristi-green-600 rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-sristi-green-400" size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">9825061139</span>
                  <span className="text-xs text-gray-500 mt-1">Mon-Sat : 10 AM to 7 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-sristi-green-400" size={18} />
                </div>
                <a href="mailto:bionest@sristiinnovations.com" className="text-sm text-gray-400 hover:text-white transition-colors">bionest@sristiinnovations.com</a>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-sristi-green-400" size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-300 mb-1">Office Address</span>
                  <span className="text-sm text-gray-400 leading-relaxed">AES Boys Hostel Campus, Nr. Gujarat University Library & SBI Bank Navrangpura, Ahmedabad - 380009</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-sristi-green-400" size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-300 mb-1">Incubation Space Address</span>
                  <span className="text-sm text-gray-400 leading-relaxed">SRISTI Innovations, C/O Grambharti Campus, Gandhinagar-Mahudi Rd, Gandhinagar, Gujarat - 382650</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SRISTI Innovations. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
