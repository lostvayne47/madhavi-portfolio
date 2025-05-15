
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Cognitive Behavioral Therapy Study",
      description: "A research project investigating the effectiveness of CBT in treating anxiety disorders among college students.",
      category: "Research",
      tags: ["CBT", "Anxiety", "Clinical Trial"],
    },
    {
      title: "Mental Health Intervention Program",
      description: "Development and implementation of a mental health program for underserved communities.",
      category: "Clinical Work",
      tags: ["Intervention", "Community", "Mental Health"],
    },
    {
      title: "Neuroplasticity and Learning",
      description: "Exploring the connection between neuroplasticity and adult learning capabilities.",
      category: "Research",
      tags: ["Neuroscience", "Learning", "Plasticity"],
    },
    {
      title: "Trauma Recovery Framework",
      description: "Creating an evidence-based framework for trauma recovery in adolescents.",
      category: "Clinical Work",
      tags: ["Trauma", "Recovery", "Adolescents"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="heading-lg text-gray-800 mb-4">Research & Projects</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-gray-600 max-w-3xl text-lg">
            Explore my recent research projects and clinical work in the field of psychology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-sm bg-white hover-lift overflow-hidden">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-medium text-primary mb-4">
                  {project.category}
                </div>
                <h3 className="heading-md mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-8 py-4">
                <Button variant="ghost" className="text-primary hover:text-secondary hover:bg-accent/50 p-0 flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary text-primary hover:text-primary hover-lift">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
