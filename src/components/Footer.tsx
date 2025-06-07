
import { Link } from "react-router-dom";
import { TrendingUp, CreditCard, Trophy, Info, BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-green-400">FIN</span>
              <span className="text-white">WIN</span>
            </div>
            <p className="text-gray-400 text-sm">
              Master your money, win your future. The ultimate financial management platform for smart savers.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                F
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                T
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                L
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/income-tracker" className="text-gray-400 hover:text-green-400 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Income Tracker</span>
                </Link>
              </li>
              <li>
                <Link to="/expense-tracker" className="text-gray-400 hover:text-green-400 flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Expense Tracker</span>
                </Link>
              </li>
              <li>
                <Link to="/challenge" className="text-gray-400 hover:text-green-400 flex items-center space-x-2">
                  <Trophy className="h-4 w-4" />
                  <span>Challenges</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400 flex items-center space-x-2">
                  <Info className="h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-green-400 flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Resources</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@finwin.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FINWIN. All rights reserved. Made with ❤️ for smart financial management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
