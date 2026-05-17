import { motion } from 'motion/react';
import { ShieldCheck, IndianRupee, Wrench } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.clubmahindra.com/blog/media/section_images/beaches-to-f3e65b7edebcf68.webp"
          alt="Coastal road in Ratnagiri"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 to-ocean-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-sand-50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sunset-500/20 text-sunset-500 border border-sunset-500/30 text-sm font-semibold tracking-wider uppercase mb-6">
              Welcome to Konkan
            </span>
            <h1 className="text-5xl md:text-7xl leading-tight font-bold text-balance mb-6 text-white font-serif">
              Explore Ratnagiri, <br />
              <span className="text-sunset-500 font-serif">Your Way</span>
            </h1>
            <p className="text-lg md:text-xl text-sand-200 mb-10 text-pretty max-w-xl font-light">
              Affordable Scooty & Car Rentals in Ratnagiri, Maharashtra. Start your coastal adventure with well-maintained rides.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="#scooters-fleet"
                className="inline-flex justify-center items-center px-8 py-4 bg-sunset-500 hover:bg-sunset-600 text-white rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-sunset-500/30 text-lg"
              >
                Book a Scooty
              </a>
              <a
                href="#cars-fleet"
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-ocean-900 text-white rounded-full font-semibold transition-all transform hover:-translate-y-1 text-lg"
              >
                Book a Car
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-sunset-500" />
                <span className="text-sm font-medium text-sand-100">Easy Booking</span>
              </div>
              <div className="flex items-center gap-3">
                <IndianRupee className="w-6 h-6 text-sunset-500" />
                <span className="text-sm font-medium text-sand-100">Affordable Rates</span>
              </div>
              <div className="flex items-center gap-3 col-span-2 md:col-span-1">
                <Wrench className="w-6 h-6 text-sunset-500" />
                <span className="text-sm font-medium text-sand-100">Well-Maintained</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
