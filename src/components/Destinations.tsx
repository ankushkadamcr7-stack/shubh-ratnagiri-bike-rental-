import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Destinations() {
  const places = [
    {
      name: 'Ganpatipule Beach',
      img: 'https://www.incredibleindia-tourism.org/images/weekend-getaways/ganapatipule-ratnagiri.jpg',
      desc: 'Famous for its pristine coastline and the Swayambhu Ganpati Temple.'
    },
    {
      name: 'Thiba Palace',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thiba_Palace_Ratnagiri_-_panoramio.jpg/1280px-Thiba_Palace_Ratnagiri_-_panoramio.jpg',
      desc: 'A historical palace offering panoramic sunset views of the Arabian Sea.'
    },
    {
      name: 'Ratnadurg Fort',
      img: 'https://im.whatshot.in/img/2020/Feb/ratndurg-or-bhagavati-fort-body-07-ratnadurg-cropped-1582530746.jpg?wp=1',
      desc: 'A stunning horseshoe-shaped fort surrounded by the ocean on three sides.'
    },
    {
      name: 'Pawas',
      img: 'https://www.hlimg.com/images/places2see/738X538/images-13-1509253179m.jpg?w=400&dpr=2.6',
      desc: 'A serene spiritual and scenic village known for the ashram of Swami Swaroopanand.'
    },
    {
      name: 'Jaigad Fort',
      img: 'https://preview.redd.it/jaigad-fort-near-ratnagiri-india-v0-qikxh0edrpke1.jpeg?auto=webp&s=396ef8e6503e22e35d840e512de143ba257e47d9',
      desc: 'A 16th-century sea fort situated at the meeting point of the Shastri river and the Arabian Sea.'
    },
    {
      name: 'Mandavi Beach',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop',
      desc: 'Also known as the Black Sand Beach, perfect for evening strolls and local street food.'
    }
  ];

  return (
    <section id="destinations" className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-serif text-ocean-900 mb-4"
            >
              Top Places to Visit
            </motion.h2>
            <p className="text-lg text-sand-800">
              Get your rental ride and explore these breathtaking destinations around Ratnagiri.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place, idx) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={place.img} 
                alt={place.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-sunset-500" />
                    {place.name}
                  </h3>
                  <p className="text-sand-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {place.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
