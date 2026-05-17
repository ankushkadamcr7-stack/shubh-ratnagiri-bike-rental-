import { useState, useEffect } from 'react';
import { Menu, X, Bike, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav border-b border-sand-200 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Car className="w-8 h-8 text-sunset-500" />
              <Bike className="w-6 h-6 text-sunset-500 -ml-2 mb-2 bg-white/20 rounded-full" />
            </div>
            <a href="#home" className={`font-serif text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-ocean-900' : 'text-white'}`}>
              Shubh<span className="text-sunset-500">Ratnagiri</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-sunset-500 transition-colors ${scrolled ? 'text-ocean-800' : 'text-sand-100'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-sunset-500 hover:bg-sunset-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-ocean-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-sand-50 border-b border-sand-200 shadow-xl md:hidden flex flex-col"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-ocean-800 hover:text-sunset-500"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-sunset-500 text-white px-6 py-3 rounded-xl text-center font-semibold mt-4 shadow-md"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
