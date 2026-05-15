import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: 'Scooter (e.g. Activa/Jupiter)',
    startDate: '',
    endDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Shubh Ratnagiri Bike Rental,%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Vehicle Needed:* ${formData.vehicle}%0A*Dates:* ${formData.startDate} to ${formData.endDate}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919881280296?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-ocean-900 mb-4"
          >
            Book Your Ride Today
          </motion.h2>
          <div className="w-24 h-1 bg-sunset-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-sand-200"
          >
            <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-6">Enquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ocean-900 mb-2">Your Name</label>
                  <input required type="text" name="name" onChange={handleChange} className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sunset-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ocean-900 mb-2">Phone Number</label>
                  <input required type="tel" name="phone" onChange={handleChange} className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sunset-500" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ocean-900 mb-2">Vehicle Type</label>
                <select name="vehicle" onChange={handleChange} className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sunset-500">
                  <option>Scooter (e.g. Activa/Jupiter)</option>
                  <option>Hatchback Car (Swift/i20)</option>
                  <option>Sedan Car (Dzire/Etios)</option>
                  <option>SUV (Innova/Ertiga)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ocean-900 mb-2">Start Date</label>
                  <input required type="date" name="startDate" onChange={handleChange} className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sunset-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ocean-900 mb-2">End Date</label>
                  <input required type="date" name="endDate" onChange={handleChange} className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sunset-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ocean-900 mb-2">Any Message (Optional)</label>
                <textarea rows={3} name="message" onChange={handleChange} className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sunset-500" placeholder="Specific requirements?"></textarea>
              </div>

              <button type="submit" className="w-full bg-sunset-500 hover:bg-sunset-600 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Send Inquiry on WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="mb-10 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-6">Reach Out to Us</h3>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <MapPin className="w-6 h-6 text-sunset-500" />
                </div>
                <div>
                  <h4 className="font-bold text-ocean-900 mb-1">Our Location</h4>
                  <p className="text-sand-900 text-sm">Tara Park, Boarding Rd, near Desai Highschool,<br/>Sanmitra Nagar, Ratnagiri, Maharashtra 415612</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Phone className="w-6 h-6 text-sunset-500" />
                </div>
                <div>
                  <h4 className="font-bold text-ocean-900 mb-1">Call & WhatsApp</h4>
                  <p className="text-sand-900 text-sm">+91 98812 80296</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Clock className="w-6 h-6 text-sunset-500" />
                </div>
                <div>
                  <h4 className="font-bold text-ocean-900 mb-1">Business Hours</h4>
                  <p className="text-sand-900 text-sm">Open All Days<br/>07:00 AM – 09:00 PM</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 lg:h-72 bg-sand-200 rounded-3xl overflow-hidden shadow-inner relative">
              <iframe 
                title="Shubh Ratnagiri Map Location"
                src="https://maps.google.com/maps?q=Tara%20Park,%20Boarding%20Rd,%20near%20Desai%20Highschool,%20Sanmitra%20Nagar,%20Ratnagiri,%20Maharashtra%20415612&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
