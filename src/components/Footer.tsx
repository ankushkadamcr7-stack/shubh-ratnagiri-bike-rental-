import { Bike, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ocean-900 border-t border-ocean-800 text-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Bike className="w-8 h-8 text-sunset-500" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Shubh<span className="text-sunset-500">Ratnagiri</span>
              </span>
            </div>
            <p className="text-sm text-sand-50/70 mb-8 max-w-sm">
              Your trusted ride partner in Ratnagiri. Offering premium scooty and car rentals to make your Konkan adventure unforgettable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-sunset-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-sunset-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919881280296" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-sunset-500 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-sunset-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-sunset-500 transition-colors">Services</a></li>
              <li><a href="#fleet" className="hover:text-sunset-500 transition-colors">Our Fleet</a></li>
              <li><a href="#destinations" className="hover:text-sunset-500 transition-colors">Destinations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#contact" className="hover:text-sunset-500 transition-colors">Contact Us</a></li>
              <li><a href="https://maps.app.goo.gl/yGDwpFYqzqE9vZKT8" target="_blank" rel="noreferrer" className="hover:text-sunset-500 transition-colors">Google Maps Profile</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-ocean-800 mt-16 pt-8 text-center text-sm text-sand-50/50">
          <p>© 2025 Shubh Ratnagiri Bike Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
