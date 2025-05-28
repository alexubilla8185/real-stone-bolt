import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium text-white mb-4 font-playfair">Real Stone & Granite</h3>
            <p className="text-gray-300 mb-4">
              Integrity, Craftsmanship, Quality
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/RealStoneGranite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/realstone.vip/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/real-stone-&-granite-corp./"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-4 font-playfair">Stone Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?type=granite" className="text-gray-300 hover:text-gold transition-colors">
                  Granite
                </Link>
              </li>
              <li>
                <Link to="/products?type=marble" className="text-gray-300 hover:text-gold transition-colors">
                  Marble
                </Link>
              </li>
              <li>
                <Link to="/products?type=quartzite" className="text-gray-300 hover:text-gold transition-colors">
                  Quartzite
                </Link>
              </li>
              <li>
                <Link to="/products?type=quartz" className="text-gray-300 hover:text-gold transition-colors">
                  Quartz
                </Link>
              </li>
              <li>
                <Link to="/products?type=travertine" className="text-gray-300 hover:text-gold transition-colors">
                  Travertine
                </Link>
              </li>
              <li>
                <Link to="/products?type=limestone" className="text-gray-300 hover:text-gold transition-colors">
                  Limestone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-4 font-playfair">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 text-gold shrink-0 mt-1" size={18} />
                <a href="tel:7724899964" className="text-gray-300 hover:text-gold transition-colors">
                  772-489-9964
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 text-gold shrink-0 mt-1" size={18} />
                <a href="mailto:info@realstoneandgranite.com" className="text-gray-300 hover:text-gold transition-colors">
                  info@realstoneandgranite.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 text-gold shrink-0 mt-1" size={18} />
                <a 
                  href="https://maps.app.goo.gl/TP87Gysfn89U4UhE9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Visit Our Showroom
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Real Stone & Granite. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <Link to="/privacy" className="hover:text-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-gold transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;