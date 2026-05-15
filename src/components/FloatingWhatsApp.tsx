import { MessageCircle, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function FloatingButtons() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mobile Sticky Bottom "Call Now" */}
      <div className="md:hidden fixed bottom-4 left-4 right-20 z-40">
        <a 
          href="tel:+919881280296"
          className="bg-ocean-900 text-white flex items-center justify-center gap-2 py-3.5 px-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-semibold border-2 border-white/20 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span>Call Now</span>
        </a>
      </div>

      {/* Floating WhatsApp Container */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4 pointer-events-none">
        
        {/* Premium Popup Message */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.2)] p-5 w-72 md:w-80 relative border border-gray-100 pointer-events-auto"
            >
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setShowPopup(false);
                }}
                className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-[#25D366] fill-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Need a ride? 🛵</h4>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                    Hi there! We are online and ready to help you find the perfect vehicle.
                  </p>
                  <a 
                    href="https://wa.me/919881280296"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex mt-4 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#20ba59] transition-colors shadow-lg shadow-[#25D366]/30 active:scale-95"
                  >
                    Start Chat
                  </a>
                </div>
              </div>

              {/* Chat Bubble Tail */}
              <div className="absolute -bottom-2 right-[22px] w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45 hidden md:block"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Icon Button */}
        <div className="relative group flex justify-end pointer-events-auto">
          {/* Ping effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60 duration-1000"></div>
          
          <button
            onClick={() => {
              if (!showPopup) setShowPopup(true);
              else window.open("https://wa.me/919881280296", "_blank");
            }}
            className="relative bg-[#25D366] text-white p-4 lg:p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 flex items-center justify-center z-10"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 fill-current" />
          </button>
        </div>
      </div>
    </>
  );
}
