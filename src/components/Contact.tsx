import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => (
  <section id="contact" className="py-24 hero-bg">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <ScrollReveal>
        <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">
          Let's Work Together
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Start Your Project
        </h2>
        <p className="text-primary-foreground/60 text-lg mb-10">
          Ready to elevate your brand? Drop me an email and let's discuss how I can help your business grow online.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <Button variant="hero" size="lg" asChild>
          <a href="mailto:venkateswargandikota@gmail.com" className="inline-flex items-center gap-2">
            <Mail className="w-5 h-5" />
            venkateswargandikota@gmail.com
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default Contact;
