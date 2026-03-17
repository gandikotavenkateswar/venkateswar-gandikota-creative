import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Owner, Spice Garden Restaurant",
    quote:
      "Venkateswar completely transformed our online presence. Our Instagram following tripled in just 3 months, and we're getting new walk-ins every week who found us online!",
    rating: 5,
  },
  {
    name: "Rahul Menon",
    role: "Founder, CloudFresh Laundry",
    quote:
      "The website he built for us is stunning and fast. Customers love the easy booking flow. Our online orders jumped 60% within the first month of launch.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Manager, Sweet Crumbs Bakery",
    quote:
      "Professional, creative, and always on time. He understood our brand perfectly and delivered a website that truly reflects who we are. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-secondary font-medium tracking-widest uppercase text-sm text-center mb-2">
          Testimonials
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          What Clients Say
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Don't just take my word for it — hear from businesses I've helped grow.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.12}>
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-display font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
