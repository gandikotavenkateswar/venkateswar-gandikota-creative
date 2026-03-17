import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 hero-bg opacity-80" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in">
        Freelance Digital Services
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
        I Build Brands <br />
        <span className="text-gradient">That Stand Out</span>
      </h1>
      <p className="text-primary-foreground/60 max-w-xl mx-auto text-lg mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
        Social media management & stunning websites for restaurants, cafés, and local businesses.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Button variant="hero" size="lg" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
        <Button variant="hero-outline" size="lg" asChild>
          <a href="#services">View Services</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
