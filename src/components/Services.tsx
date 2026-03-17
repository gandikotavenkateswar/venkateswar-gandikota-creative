import { Globe, Share2, Palette, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content creation, scheduling, and community engagement across Instagram, Facebook, and more.",
  },
  {
    icon: Globe,
    title: "Website Creation",
    description:
      "Modern, responsive websites tailored for restaurants, cafés, retail stores, and local businesses.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Cohesive visual branding including logos, color palettes, and style guides that make you memorable.",
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    description:
      "Data-driven marketing strategies to grow your online presence and convert followers into customers.",
  },
];

const Services = () => (
  <section id="services" className="py-24 section-alt">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-secondary font-medium tracking-widest uppercase text-sm text-center mb-2">
          What I Do
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
          Services
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <div className="bg-card rounded-lg p-8 border gold-border hover:shadow-lg transition-shadow group h-full">
              <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <s.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
