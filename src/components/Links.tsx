import { Card } from "./ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const links = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/saurabh",
    color: "hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/saurabh",
    color: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/saurabh",
    color: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:saurabh@example.com",
    color: "hover:bg-red-500/10",
  },
];

export const Links = () => {
  return (
     <Card className="p-6 border-border bg-card hover-lift">
      <h3 className="text-2xl font-bold mb-6">
        <span className="text-accent">LIN</span>
        <br />
        KS.
      </h3>
      
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-3 rounded-lg border border-border bg-card/50 transition-all duration-300 hover:border-purple group`}
          >
            <div className="p-2 rounded-md bg-card border border-border group-hover:border-accent transition-colors">
              <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <span className="font-medium text-foreground group-hover:text-accent transition-colors">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </Card>
  );
};