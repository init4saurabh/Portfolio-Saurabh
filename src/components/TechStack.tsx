import { Card } from "./ui/card";

const techStack = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "React Query",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Hono.js",
    "Python",
    "FastAPI",
    "REST APIs",
  ],
  "Database & Services": [
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Prisma ORM",
    "Redis",
    "Docker",
  ],
  "Currently Learning": [
    "Rust",
    "Web3",
    "",
  ],
};

export const TechStack = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-muted-foreground font-mono">{"{ }"}</span> TECH
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold">STACK</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techStack).map(([category, items]) => (
            <Card 
              key={category} 
              className="p-6 border-border bg-card hover-lift card-glow"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent">{category}:</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm border border-border hover:border-accent/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
