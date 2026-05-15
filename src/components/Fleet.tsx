import { motion } from 'motion/react';
import { IndianRupee } from 'lucide-react';

export default function Fleet() {
  const fleet = [
    {
      name: 'Honda Activa',
      type: 'Scooter',
      price: '400',
      img: 'https://i.cdn.newsbytesapp.com/images/l200_30851597390379.jpg',
      features: ['2 Seats', 'Automatic', 'Helmet Included']
    },
    {
      name: 'TVS Jupiter',
      type: 'Scooter',
      price: '400',
      img: 'https://www.tvsmotor.com/-/media/BookOnline-V2/Scooter/TVS-JUPITER-125/Disc/Indi-Blue/New/1.webp',
      features: ['2 Seats', 'Automatic', 'Helmet Included']
    },
    {
      name: 'Maruti Dzire',
      type: 'Sedan Car',
      price: '2000',
      img: 'https://content.carlelo.com/media/models/Dzire/base/maruti-suzuki-dzire-1.webp',
      features: ['5 Seats', 'AC / Heater', 'Manual']
    },
    {
      name: 'Toyota Innova',
      type: 'SUV / XL Car',
      price: '3500',
      img: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-3.png?isig=0&q=80',
      features: ['7 Seats', 'AC / Heater', 'Spacious']
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-ocean-900 mb-4"
          >
            Our Fleet
          </motion.h2>
          <div className="w-24 h-1 bg-sunset-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-sand-800 max-w-2xl mx-auto">
            Choose from our well-maintained range of scooties and cars at the best competitive prices in Ratnagiri.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleet.map((vehicle, idx) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-sand-50 rounded-3xl overflow-hidden border border-sand-200 hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="h-48 bg-white p-4 overflow-hidden flex items-center justify-center">
                <img 
                  src={vehicle.img} 
                  alt={vehicle.name} 
                  className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-ocean-900">{vehicle.name}</h3>
                    <p className="text-sand-800 text-sm">{vehicle.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-sunset-600 font-bold text-2xl my-4">
                  <IndianRupee className="w-5 h-5 mr-1" />
                  {vehicle.price}
                  <span className="text-sm font-normal text-sand-800 ml-1">/ day</span>
                </div>

                <ul className="text-sm text-sand-900 space-y-2 mb-6 flex-grow">
                  {vehicle.features.map(feat => (
                    <li key={feat} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-ocean-500" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/919881280296?text=Hi,%20I'm%20interested%20in%20booking%20the%20${vehicle.name}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center bg-white border-2 border-ocean-900 text-ocean-900 hover:bg-ocean-900 hover:text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Confirm Booking
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
