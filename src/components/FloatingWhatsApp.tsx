import { Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
                  <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
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
            <WhatsAppIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </>
  );
}
