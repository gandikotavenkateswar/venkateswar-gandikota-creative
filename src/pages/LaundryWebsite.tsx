import { ArrowLeft, Phone, Clock, MapPin, Droplets, Shirt, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import laundryHero from "@/assets/laundry-hero.jpg";

const services = [
  { icon: Shirt, title: "Wash & Fold", desc: "Everyday laundry washed, dried and neatly folded.", price: "₹49/kg" },
  { icon: Sparkles, title: "Dry Cleaning", desc: "Premium dry cleaning for suits, dresses & delicates.", price: "From ₹199" },
  { icon: Droplets, title: "Steam Iron", desc: "Crisp, wrinkle-free clothes ready to wear.", price: "₹15/piece" },
  { icon: Truck, title: "Free Pickup", desc: "Free doorstep pickup & delivery on all orders.", price: "Free" },
];

const LaundryWebsite = () => (
  <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Link to="/#projects" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
      <ArrowLeft className="w-5 h-5 text-gray-700" />
    </Link>

    {/* Navbar */}
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="text-xl font-bold" style={{ color: "#0284c7" }}>Fresh<span className="text-gray-900">Fold</span></span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-sky-600 transition-colors">Home</a>
          <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
          <a href="#how" className="hover:text-sky-600 transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
        </div>
        <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white">Schedule Pickup</Button>
      </div>
    </nav>

    {/* Hero */}
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <img src={laundryHero} alt="Laundry service" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/70 to-transparent" />
      <div className="relative container mx-auto px-4 py-20">
        <p className="text-sky-300 font-semibold mb-2 tracking-wide uppercase text-sm">Laundry Made Easy</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Clean Clothes,<br /><span className="text-sky-400">Zero Hassle</span>
        </h1>
        <p className="text-sky-100/80 max-w-lg text-lg mb-8">
          Professional laundry & dry cleaning services with free doorstep pickup and delivery. Your clothes deserve the best care.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 h-auto text-base font-semibold">Schedule Pickup</Button>
          <Button variant="outline" className="border-sky-400 text-sky-100 hover:bg-sky-400/10 px-8 py-3 h-auto text-base">View Pricing</Button>
        </div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <p className="text-sky-600 font-semibold text-center text-sm uppercase tracking-wide mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-sky-600" />
              </div>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
              <p className="text-sky-600 font-semibold">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section id="how" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { step: "1", title: "Schedule", desc: "Book a pickup via call or website. We come to your door." },
            { step: "2", title: "We Clean", desc: "Clothes are professionally washed, ironed or dry-cleaned." },
            { step: "3", title: "Delivered", desc: "Fresh, folded clothes delivered back within 24–48 hours." },
          ].map((s) => (
            <div key={s.step}>
              <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="contact" className="py-16 bg-sky-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready for Fresh Clothes?</h2>
        <p className="mb-8 text-sky-100 max-w-md mx-auto">Schedule your first pickup today and get 20% off your first order.</p>
        <Button className="bg-white text-sky-700 hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">Get Started</Button>
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sky-100">
          <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4" /><span>+91 87654 32100</span></div>
          <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4" /><span>7 AM – 10 PM</span></div>
          <div className="flex items-center justify-center gap-2"><MapPin className="w-4 h-4" /><span>Across Hyderabad</span></div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <p>© 2026 FreshFold Laundry Services. All rights reserved.</p>
      <p className="mt-1 text-gray-500">Demo website by VG.</p>
    </footer>
  </div>
);

export default LaundryWebsite;
