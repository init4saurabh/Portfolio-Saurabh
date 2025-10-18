import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Profile Card */}
        <Card className="md:col-span-4 p-6 border-border bg-card hover-lift card-glow">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Saurabh" 
                className="w-32 h-32 rounded-2xl object-cover border-2 "
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-card animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">Saurabh.</h1>
              <p className="text-muted-foreground text-sm">@init4saurabh</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-accent/20">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/20">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/20">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <Card className="md:col-span-8 p-8 border-border bg-card hover-lift card-glow">
          <div className="space-y-6">
            <div>
              <p className="text-lg text-muted-foreground mb-2">I build</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm border border-accent/20">
                  WebApps
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm border border-accent/20">
                  Backends
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm border border-accent/20">
                  APIs
                </span>
              </div>
            </div>

            <div className="text-foreground/90 leading-relaxed">
              <p className="text-xl">
                Hello, I'm Saurabh! A passionate full-stack developer 
                specializing in building modern web applications with cutting-edge technologies.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-yellow-500 font-medium">Available for work</span>
              
            </div>

            <div className="pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get in touch
              </Button>
            </div>
          </div>
        </Card>

        {/* Quote Card */}
        <Card className="md:col-span-5 p-6 border-border bg-card hover-lift card-glow">
          <div className="h-full flex flex-col justify-center">
            <p className="text-muted-foreground text-sm mb-2 font-mono">
              // daily thoughts
            </p>
            <blockquote className="text-lg italic text-foreground/80">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4">- Cory House</p>
          </div>
        </Card>

        {/* Status Card */}
        <Card className="md:col-span-7 p-6 border-border bg-gradient-to-br from-accent/10 to-transparent hover-lift card-glow">
          <div className="flex items-center justify-between h-full">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Status</p>
              <p className="text-xl font-semibold">Building the future, one commit at a time</p>
            </div>
            <div className="text-6xl"></div>
          </div>
        </Card>
      </div>
    </section>
  );
};
