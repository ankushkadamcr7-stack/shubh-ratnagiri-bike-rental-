import { motion } from 'motion/react';
import { Motorbike, CarFront, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Scooty Rental',
      icon: Motorbike,
      image: "https://cdn-s3.autocarindia.com/legacy/cdni/ExtraImages/20200428031817_Top-selling-scooters-in-India.jpg?w=728&q=75",
      desc: "Perfect for solo travellers and couples. Explore Ratnagiri's beaches, forts, and ghats at your own pace.",
      features: ['Daily/Weekly rates', 'Helmet included', 'Easy pickup & drop'],
      link: '#scooters-fleet',
      btnText: 'View Scooties & Bikes'
    },
    {
      title: 'Car Rental',
      icon: CarFront,
      image: "https://jucars.in/wp-content/uploads/2025/08/CDRSD-960_Option_1_Mobile.webp",
      desc: "Comfortable self-drive or chauffeur car rental for families and groups exploring Ratnagiri.",
      features: ['AC Cars available', 'Family-friendly', 'Flexible duration'],
      link: '#cars-fleet',
      btnText: 'View Cars & SUVs'
    }
  ];

  return (
    <section id="services" className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-ocean-900 mb-4"
          >
            Our Rental Services
          </motion.h2>
          <div className="w-24 h-1 bg-sunset-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 sm:h-72 lg:h-80 overflow-hidden relative flex items-center justify-center bg-sand-50/50">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-4"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur pb-1 pt-2 px-3 rounded-2xl shadow-sm z-10">
                  <service.icon className="w-8 h-8 text-ocean-900" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-ocean-900 mb-4">{service.title}</h3>
                <p className="text-sand-900 text-lg mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map(feat => (
                    <li key={feat} className="flex items-center gap-3 text-ocean-800">
                      <CheckCircle2 className="w-5 h-5 text-sunset-500 flex-shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.link}
                  className="block w-full text-center bg-ocean-900 hover:bg-ocean-800 text-white font-semibold py-4 rounded-xl transition-colors"
                >
                  {service.btnText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
