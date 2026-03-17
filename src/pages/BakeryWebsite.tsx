import { ArrowLeft, Clock, MapPin, Phone, Cake, Coffee, Croissant, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bakeryHero from "@/assets/bakery-hero.jpg";

const menu = [
  { icon: Croissant, title: "Artisan Breads", desc: "Sourdough, baguettes, ciabatta & more, baked fresh daily.", price: "From ₹80" },
  { icon: Cake, title: "Custom Cakes", desc: "Birthday, wedding & celebration cakes made to order.", price: "From ₹599" },
  { icon: Coffee, title: "Coffee & Beverages", desc: "Specialty coffee, fresh juices & handcrafted drinks.", price: "From ₹120" },
  { icon: UtensilsCrossed, title: "Savoury Bites", desc: "Quiches, sandwiches & puff pastries for every appetite.", price: "From ₹150" },
];

const BakeryWebsite = () => (
  <div className="min-h-screen bg-amber-50 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Link to="/#projects" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
      <ArrowLeft className="w-5 h-5 text-gray-700" />
    </Link>

    {/* Navbar */}
    <nav className="bg-white/95 backdrop-blur shadow-sm sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="text-xl font-bold text-amber-800">Golden<span className="text-amber-500">Crust</span></span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-amber-700 transition-colors">Home</a>
          <a href="#menu" className="hover:text-amber-700 transition-colors">Menu</a>
          <a href="#about" className="hover:text-amber-700 transition-colors">Story</a>
          <a href="#contact" className="hover:text-amber-700 transition-colors">Visit</a>
        </div>
        <Button size="sm" className="bg-amber-700 hover:bg-amber-800 text-white">Order Now</Button>
      </div>
    </nav>

    {/* Hero */}
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <img src={bakeryHero} alt="Bakery" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-amber-900/70 to-transparent" />
      <div className="relative container mx-auto px-4 py-20">
        <p className="text-amber-300 font-semibold mb-2 tracking-wide uppercase text-sm">Est. 2018</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Baked with<br /><span className="text-amber-400">Love & Flour</span>
        </h1>
        <p className="text-amber-100/80 max-w-lg text-lg mb-8">
          Handcrafted breads, pastries & cakes made with the finest ingredients. Freshness you can taste in every bite.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950 px-8 py-3 h-auto text-base font-semibold">Explore Menu</Button>
          <Button variant="outline" className="border-amber-400 text-amber-100 hover:bg-amber-400/10 px-8 py-3 h-auto text-base">Our Story</Button>
        </div>
      </div>
    </section>

    {/* Menu */}
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <p className="text-amber-600 font-semibold text-center text-sm uppercase tracking-wide mb-2">Our Offerings</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Fresh From the Oven</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menu.map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-amber-700" />
              </div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
              <p className="text-amber-700 font-semibold text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="py-20 bg-amber-800 text-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-amber-100/80 text-lg mb-8">
          What started as a small home kitchen has grown into the city's favourite bakery. We use traditional recipes, locally sourced ingredients, and a whole lot of passion to create breads and treats that bring people together.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div><p className="text-3xl font-bold text-amber-300">500+</p><p className="text-amber-200/60 text-sm">Items Baked Daily</p></div>
          <div><p className="text-3xl font-bold text-amber-300">7</p><p className="text-amber-200/60 text-sm">Years of Baking</p></div>
          <div><p className="text-3xl font-bold text-amber-300">4.9★</p><p className="text-amber-200/60 text-sm">Customer Rating</p></div>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Us</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-gray-600">
          <div className="flex flex-col items-center gap-2"><MapPin className="w-5 h-5 text-amber-600" /><span>45 Baker Street, Pune</span></div>
          <div className="flex flex-col items-center gap-2"><Clock className="w-5 h-5 text-amber-600" /><span>7 AM – 9 PM Daily</span></div>
          <div className="flex flex-col items-center gap-2"><Phone className="w-5 h-5 text-amber-600" /><span>+91 91234 56789</span></div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-amber-950 text-amber-300/60 py-8 text-center text-sm">
      <p>© 2026 GoldenCrust Bakery. All rights reserved.</p>
      <p className="mt-1 text-amber-300/40">Demo website by VG.</p>
    </footer>
  </div>
);

export default BakeryWebsite;
