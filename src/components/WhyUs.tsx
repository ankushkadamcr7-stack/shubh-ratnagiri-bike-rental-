import { motion } from 'motion/react';
import { Settings, Tags, MapPin, HeadphonesIcon } from 'lucide-react';

export default function WhyUs() {
  const points = [
    {
      title: "Well-Maintained Fleet",
      desc: "Our vehicles are regularly serviced and thoroughly checked before every rental to ensure a smooth and safe ride.",
      icon: Settings
    },
    {
      title: "Affordable & Transparent",
      desc: "No hidden charges whatsoever. We offer the best competitive pricing for daily and weekly rentals.",
      icon: Tags
    },
    {
      title: "Local Experts",
      desc: "We know Ratnagiri inside out. Need recommendations for beaches or restaurants? We've got you covered.",
      icon: MapPin
    },
    {
      title: "24/7 Support",
      desc: "We're always just a call away. Get reliable on-road customer support anytime during your rental duration.",
      icon: HeadphonesIcon
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-ocean-900 mb-4"
          >
            Why Travellers Choose Us
          </motion.h2>
          <p className="text-lg text-sand-800 max-w-2xl mx-auto">
            We are committed to making your stay in Ratnagiri memorable and hassle-free with top-quality service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-sand-50 border border-sand-200 hover:border-sunset-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-sunset-500/10 rounded-2xl flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-sunset-500" />
              </div>
              <h3 className="text-xl font-bold font-serif text-ocean-900 mb-3 hover:text-sunset-600 transition-colors">
                {point.title}
              </h3>
              <p className="text-sand-900 leading-relaxed text-sm">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
