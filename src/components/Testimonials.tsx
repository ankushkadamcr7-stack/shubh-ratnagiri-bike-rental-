import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul M.",
      location: "Pune",
      text: "Booked an Activa for 3 days. The process was super quick and the scooty was in excellent condition. Highly recommended for anyone visiting Ratnagiri!",
    },
    {
      name: "Priya K.",
      location: "Mumbai",
      text: "We rented an Innova for our family trip to Ganpatipule and Pawas. The car was clean, AC worked perfectly, and the driver was extremely polite and knew the local routes well.",
    },
    {
      name: "Aniket J.",
      location: "Kolhapur",
      text: "Best rental service in Ratnagiri. Pricing is transparent with no hidden charges. The owner guided us to some offbeat beaches which made our trip special.",
    }
  ];

  return (
    <section className="py-24 bg-ocean-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            Happy Travellers
          </motion.h2>
          <div className="w-24 h-1 bg-sunset-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-ocean-800 p-8 rounded-3xl border border-ocean-500/30"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sunset-500 text-sunset-500" />
                ))}
              </div>
              <p className="text-sand-100 text-lg leading-relaxed mb-6 font-light italic">
                "{review.text}"
              </p>
              <div>
                <p className="font-bold font-serif text-xl text-white">{review.name}</p>
                <p className="text-sand-800 text-sm">from {review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
