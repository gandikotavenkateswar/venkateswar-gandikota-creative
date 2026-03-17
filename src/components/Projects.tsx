import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import projectDental from "@/assets/project-dental.jpg";
import projectBakery from "@/assets/project-bakery.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";

const projects = [
  {
    title: "BrightSmile Dental Hospital",
    category: "Healthcare",
    description: "A modern, responsive website for a dental hospital featuring appointment booking, service showcase, and patient testimonials.",
    image: projectDental,
    link: "/projects/dental",
    tech: ["React", "Responsive", "SEO"],
  },
  {
    title: "GoldenCrust Bakery",
    category: "Food & Beverage",
    description: "Warm, inviting bakery website with menu showcase, online ordering integration, and a compelling brand story.",
    image: projectBakery,
    link: "/projects/bakery",
    tech: ["React", "Menu UI", "Mobile-First"],
  },
  {
    title: "FreshFold Laundry Service",
    category: "Service Business",
    description: "Clean, professional laundry service website with pickup scheduling, pricing transparency, and service details.",
    image: projectLaundry,
    link: "/projects/laundry",
    tech: ["React", "Booking Flow", "Modern UI"],
  },
];

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-secondary font-medium tracking-widest uppercase text-sm text-center mb-2">
          Portfolio
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Recent Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Real websites built for real businesses. Click to explore each project live.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.15}>
            <Link
              to={project.link}
              className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white flex items-center gap-1 text-sm font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
