import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Destinations from './components/Destinations';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="font-sans antialiased text-ocean-900 bg-sand-50 selection:bg-sunset-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Destinations />
        <Fleet />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

