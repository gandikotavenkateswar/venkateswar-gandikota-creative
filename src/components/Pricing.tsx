import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const packages = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    description: "Perfect for small businesses getting started online.",
    features: [
      "Social media management (2 platforms)",
      "8 posts per month",
      "Basic content creation",
      "Monthly performance report",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹9,999",
    period: "/month",
    description: "Ideal for businesses ready to scale their digital presence.",
    features: [
      "Social media management (4 platforms)",
      "20 posts per month",
      "Professional content & reels",
      "Weekly performance reports",
      "Brand identity consultation",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Website",
    price: "₹14,999",
    period: " one-time",
    description: "Custom website tailored for restaurants, cafés & retail.",
    features: [
      "Responsive modern design",
      "Up to 5 pages",
      "Menu / product showcase",
      "Google Maps & contact forms",
      "SEO optimised",
      "1 month free maintenance",
    ],
    highlighted: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 section-alt">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-secondary font-medium tracking-widest uppercase text-sm text-center mb-2">
          Pricing
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Simple, Transparent Packages
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Choose a plan that fits your needs. Custom packages available on request.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <ScrollReveal key={pkg.name} delay={i * 0.12}>
            <div
              className={`rounded-lg p-8 border flex flex-col transition-shadow hover:shadow-lg h-full ${
                pkg.highlighted
                  ? "gold-border bg-secondary/5 shadow-md relative"
                  : "border-border bg-card"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-5">{pkg.description}</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground text-sm">{pkg.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.highlighted ? "hero" : "hero-outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
