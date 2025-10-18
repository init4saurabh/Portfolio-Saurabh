import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat with AI-powered responses and sentiment analysis.",
    tags: ["Next.js", "OpenAI", "WebSocket"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Task Management SaaS",
    description: "Collaborative project management with team features.",
    tags: ["TypeScript", "Supabase", "React Query"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">FEATURED</h2>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-accent">PROJECTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
                className={`border-border bg-gradient-to-br ${project.gradient} hover-lift group overflow-hidden`}
            >
              {/* Placeholder for landing page screenshot */}
              <div className="aspect-[4/3] bg-card/50 border-b border-border flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Landing Page Preview</div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-accent/20 h-8 w-8"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-accent/20 h-8 w-8"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                    className="px-2 py-1 bg-card/80 backdrop-blur-sm text-foreground rounded-md text-xs border hover:border-white/50 dark:hover:border-dark-4/50 transition-all hover:text-white bg-neutral-800/30 dark:bg-transparent backdrop-blur-xl backdrop-saturate-200"
                  >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
