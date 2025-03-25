
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    avatar: "/placeholder.svg",
    content: "MicroSaaS GPT helped me validate and build my idea in a weekend. What would have taken months of planning happened in hours. It's truly a game-changer for solo founders.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "Developer & Entrepreneur",
    avatar: "/placeholder.svg",
    content: "I was skeptical at first, but the quality of ideas and especially the structured prompts for code generation are incredible. I built a niche tool for designers that's already generating revenue.",
    stars: 5,
  },
  {
    name: "Jessica Martinez",
    role: "Product Manager",
    avatar: "/placeholder.svg",
    content: "The depth of thought that goes into each idea is impressive. MicroSaaS GPT doesn't just give you basic concepts—it provides complete business models with monetization strategies.",
    stars: 4,
  },
  {
    name: "David Wilson",
    role: "Software Engineer",
    avatar: "/placeholder.svg",
    content: "As a developer, I appreciate how the generated prompts include all the technical details needed. The architecture suggestions are particularly helpful for building scalable applications.",
    stars: 5,
  },
  {
    name: "Emily Thompson",
    role: "Digital Marketer",
    avatar: "/placeholder.svg",
    content: "I had an idea but wasn't sure how to execute it. MicroSaaS GPT not only refined my concept but gave me a complete roadmap to build and launch. It's like having a technical co-founder.",
    stars: 5,
  },
  {
    name: "Alex Rodriguez",
    role: "Indie Hacker",
    avatar: "/placeholder.svg",
    content: "In the competitive SaaS landscape, MicroSaaS GPT helped me find an underserved niche and build a solution that stands out. The detailed prompts saved me countless hours of planning.",
    stars: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-10"></div>
      <div className="absolute -left-40 top-0 w-80 h-80 rounded-full bg-cyber-primary/10 blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 w-80 h-80 rounded-full bg-cyber-secondary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-cyber-muted px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="neon-text">Users Say</span></h2>
          <p className="text-cyber-muted-foreground">
            Join hundreds of entrepreneurs who have successfully launched their micro SaaS businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="cyber-card group hover:-translate-y-1 relative"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-cyber-primary" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyber-muted overflow-hidden border border-cyber-primary/20">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-cyber-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.stars ? 'text-cyber-accent fill-cyber-accent' : 'text-cyber-muted-foreground'}`}
                  />
                ))}
              </div>
              
              <p className="text-cyber-muted-foreground">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
