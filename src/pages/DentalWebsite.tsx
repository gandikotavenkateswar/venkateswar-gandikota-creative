import { ArrowLeft, Phone, Clock, MapPin, Star, Shield, Heart, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import dentalHero from "@/assets/dental-hero.jpg";

const services = [
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, and smile makeovers." },
  { icon: Shield, title: "Preventive Care", desc: "Regular check-ups, cleanings, and oral hygiene." },
  { icon: Heart, title: "Root Canal Treatment", desc: "Pain-free root canal therapy with modern tech." },
  { icon: Star, title: "Orthodontics", desc: "Braces and aligners for a perfect smile." },
];

const DentalWebsite = () => (
  <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
    {/* Back button */}
    <Link to="/#projects" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
      <ArrowLeft className="w-5 h-5 text-gray-700" />
    </Link>

    {/* Navbar */}
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="text-xl font-bold" style={{ color: "#0891b2" }}>Bright<span className="text-gray-900">Smile</span></span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-cyan-600 transition-colors">Home</a>
          <a href="#services" className="hover:text-cyan-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-cyan-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a>
        </div>
        <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">Book Now</Button>
      </div>
    </nav>

    {/* Hero */}
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <img src={dentalHero} alt="Dental clinic" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
      <div className="relative container mx-auto px-4 py-20">
        <p className="text-cyan-600 font-semibold mb-2 tracking-wide uppercase text-sm">Welcome to BrightSmile</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Your Smile,<br />Our <span style={{ color: "#0891b2" }}>Priority</span>
        </h1>
        <p className="text-gray-600 max-w-lg text-lg mb-8">
          Advanced dental care with gentle hands. Experience world-class treatments in a comfortable, modern environment.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 h-auto text-base">Book Appointment</Button>
          <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 h-auto text-base">Our Services</Button>
        </div>
      </div>
    </section>

    {/* Info bar */}
    <section className="bg-cyan-600 text-white py-6">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 text-center">
        <div className="flex items-center justify-center gap-3"><Phone className="w-5 h-5" /> <span>+91 98765 43210</span></div>
        <div className="flex items-center justify-center gap-3"><Clock className="w-5 h-5" /> <span>Mon–Sat: 9 AM – 8 PM</span></div>
        <div className="flex items-center justify-center gap-3"><MapPin className="w-5 h-5" /> <span>123 Health Street, Hyderabad</span></div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-cyan-600 font-semibold text-center text-sm uppercase tracking-wide mb-2">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-full bg-cyan-50 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose BrightSmile?</h2>
        <p className="text-gray-600 text-lg mb-8">
          With over 15 years of experience, our team of certified dentists combines cutting-edge technology with a gentle, patient-first approach. We believe everyone deserves a healthy, confident smile.
        </p>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div><p className="text-3xl font-bold text-cyan-600">15+</p><p className="text-gray-500 text-sm">Years Experience</p></div>
          <div><p className="text-3xl font-bold text-cyan-600">10k+</p><p className="text-gray-500 text-sm">Happy Patients</p></div>
          <div><p className="text-3xl font-bold text-cyan-600">5★</p><p className="text-gray-500 text-sm">Google Rating</p></div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="contact" className="py-16 bg-cyan-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready for a Brighter Smile?</h2>
        <p className="mb-8 text-cyan-100 max-w-md mx-auto">Book your appointment today and let us take care of your dental health.</p>
        <Button className="bg-white text-cyan-700 hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">Book Appointment</Button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <p>© 2026 BrightSmile Dental Hospital. All rights reserved.</p>
      <p className="mt-1 text-gray-500">Demo website by VG.</p>
    </footer>
  </div>
);

export default DentalWebsite;
