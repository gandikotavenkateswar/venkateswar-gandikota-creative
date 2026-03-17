import ScrollReveal from "@/components/ScrollReveal";

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <ScrollReveal>
        <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">
          About Me
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          Venkateswar Gandikota
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          I'm a freelance digital specialist passionate about helping local businesses — especially restaurants and hospitality brands — build a strong online presence. From eye-catching social media content to fast, beautiful websites, I deliver results that drive real growth.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Every project starts with understanding your unique story and goals. I combine creative design with smart strategy to make sure your brand not only looks great but also reaches the right audience.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
