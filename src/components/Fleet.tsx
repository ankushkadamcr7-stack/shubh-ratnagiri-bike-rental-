import { motion } from 'motion/react';

export default function Fleet() {
  const fleet = [
    {
      name: 'Honda Activa',
      type: 'Scooter',
      price: '400',
      img: 'https://media.zigcdn.com/media/model/2026/Mar/front-right-view-877888969_600x400.jpg',
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
      name: 'Suzuki Access 125',
      type: 'Scooter',
      price: '400',
      img: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/188491/access-125-2025-right-front-three-quarter-2.jpeg',
      features: ['2 Seats', 'Automatic', 'Helmet Included']
    },
    {
      name: 'Hero Destini 125',
      type: 'Scooter',
      price: '400',
      img: 'https://imgd.aeplcdn.com/476x268/bw/models/hero-destini-125-lx--bs-vi20200214185348.jpg',
      features: ['2 Seats', 'Automatic', 'Helmet Included']
    },
    {
      name: 'Honda Unicorn',
      type: 'Bike',
      price: '400',
      img: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/194689/unicorn-right-side-view-2.png',
      features: ['2 Seats', 'Manual', 'Helmet Included']
    },
    {
      name: 'Yamaha Fascino',
      type: 'Scooter',
      price: '400',
      img: 'https://www.yamaha-motor-india.com/theme/v3/image/fascino125fi-new/color/Disc/COOL-blue-Metallic.png',
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
      name: 'Maruti Ertiga',
      type: 'SUV / XL Car',
      price: '3000',
      img: 'https://static.langimg.com/nbt/thumb/130828973/maruti-ertiga-all-variant-prices.jpg?imgsize=1494136&width=1600&height=900&resizemode=75',
      features: ['7 Seats', 'AC / Heater', 'Spacious']
    },
    {
      name: 'Hyundai Aura',
      type: 'Sedan Car',
      price: '2000',
      img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139133/aura-exterior-right-front-three-quarter-9.png?isig=0&q=80',
      features: ['5 Seats', 'AC / Heater', 'Manual']
    }
  ];

  const twoWheelers = fleet.filter(v => ['Scooter', 'Bike'].includes(v.type));
  const fourWheelers = fleet.filter(v => v.type.includes('Car'));

  const VehicleCard = ({ vehicle, idx }: { vehicle: any, idx: number }) => (
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
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-ocean-900">{vehicle.name}</h3>
            <p className="text-sand-800 text-sm">{vehicle.type}</p>
          </div>
        </div>

        <ul className="text-sm text-sand-900 space-y-2 mb-6 flex-grow">
          {vehicle.features.map((feat: string) => (
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
  );

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

        <div id="scooters-fleet" className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-ocean-800 mb-8 pb-3 border-b-2 border-sand-100 flex items-center gap-3">
            🛵 Scooties & Bikes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {twoWheelers.map((vehicle, idx) => (
              <VehicleCard key={vehicle.name} vehicle={vehicle} idx={idx} />
            ))}
          </div>
        </div>

        <div id="cars-fleet">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-ocean-800 mb-8 pb-3 border-b-2 border-sand-100 flex items-center gap-3">
            🚘 Cars & SUVs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fourWheelers.map((vehicle, idx) => (
              <VehicleCard key={vehicle.name} vehicle={vehicle} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
