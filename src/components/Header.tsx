import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 transition-colors ${
      isActive
        ? 'text-gold font-medium'
        : 'text-gray-800 hover:text-gold'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gold font-playfair">
            Real Stone & Granite
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <div className="relative group">
            <button
              className="flex items-center py-2 px-3 text-gray-800 hover:text-gold"
              onClick={() => setProductsDropdown(!productsDropdown)}
            >
              Products <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left">
              <NavLink
                to="/products"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gold hover:text-white"
              >
                All Products
              </NavLink>
              <NavLink
                to="/products?type=granite"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gold hover:text-white"
              >
                Granite
              </NavLink>
              <NavLink
                to="/products?type=marble"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gold hover:text-white"
              >
                Marble
              </NavLink>
              <NavLink
                to="/products?type=quartzite"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gold hover:text-white"
              >
                Quartzite
              </NavLink>
              <NavLink
                to="/products?type=quartz"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gold hover:text-white"
              >
                Quartz
              </NavLink>
            </div>
          </div>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/gallery" className={navLinkClasses}>
            Gallery
          </NavLink>
          <NavLink to="/blog" className={navLinkClasses}>
            Blog
          </NavLink>
          <NavLink to="/bahamas" className={navLinkClasses}>
            Bahamas
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="container py-4 flex flex-col space-y-2">
          <NavLink
            to="/"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <div>
            <button
              className="flex items-center w-full py-2 px-3 text-gray-800 hover:text-gold"
              onClick={() => setProductsDropdown(!productsDropdown)}
            >
              Products <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {productsDropdown && (
              <div className="pl-4 mt-1 space-y-1">
                <NavLink
                  to="/products"
                  className="block py-2 px-3 text-gray-800 hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  All Products
                </NavLink>
                <NavLink
                  to="/products?type=granite"
                  className="block py-2 px-3 text-gray-800 hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  Granite
                </NavLink>
                <NavLink
                  to="/products?type=marble"
                  className="block py-2 px-3 text-gray-800 hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  Marble
                </NavLink>
                <NavLink
                  to="/products?type=quartzite"
                  className="block py-2 px-3 text-gray-800 hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  Quartzite
                </NavLink>
                <NavLink
                  to="/products?type=quartz"
                  className="block py-2 px-3 text-gray-800 hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  Quartz
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/services"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/blog"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/bahamas"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Bahamas
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="btn btn-primary mt-4"
            onClick={() => setIsOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;