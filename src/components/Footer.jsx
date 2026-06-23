import { Link } from 'react-router-dom'
import { Globe, MessageCircle, Send, MapPin, Phone, Mail } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* ১. কোম্পানির বিবরণ */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">E-Shop</h3>
          <p className="text-sm text-gray-400">
            Your ultimate destination for modern gadgets and trendy fashion items. Upgrade your lifestyle with us.
          </p>
          {/* সোশ্যাল মিডিয়া আইকন */}
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-indigo-400 transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors"><MessageCircle size={20} /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors"><Send size={20} /></a>
          </div>
        </div>

        {/* ২. কুইক লিংক (Quick Links) */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/news" className="hover:text-white transition-colors">Latest News</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><Link to="/feedback" className="hover:text-white transition-colors">Give Feedback</Link></li>
            
          </ul>
        </div>

        {/* ৩. কাস্টমার কেয়ার */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* ৪. যোগাযোগ (Contact Info) */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center space-x-2">
              <MapPin size={16} className="text-indigo-400" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-indigo-400" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-indigo-400" />
              <span>support@eshop.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* নিচের কপিরাইট অংশ */}
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; 2026 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
