import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, Users, Lightbulb } from "lucide-react";
import { AboutMe, PhD, Masters, Bachelors } from "../Constants.js";
import FadeInOnScroll from "@/components/FadeInOnScroll.js";
const About = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="mb-16">
          <FadeInOnScroll>
            <h2 className="heading-lg text-gray-800 mb-4">About Me</h2>
          </FadeInOnScroll>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-gray-600 max-w-3xl text-lg">{AboutMe}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white border-none shadow-sm hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-md mb-2">Education</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>{PhD}</li>
                    <li>{Masters}</li>
                    <li>{Bachelors}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-sm hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-md mb-2">Research Interests</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Cognitive Behavioral Therapy</li>
                    <li>Neuropsychological Assessment</li>
                    <li>Trauma and Resilience</li>
                    <li>Mental Health Interventions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-sm hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-md mb-2">Clinical Experience</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Clinical Psychologist - Organization (Years)</li>
                    <li>Research Assistant - Organization (Years)</li>
                    <li>Mental Health Counselor - Organization (Years)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-sm hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-md mb-2">Skills</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Psychological Assessment</li>
                    <li>Research Methodology</li>
                    <li>Statistical Analysis</li>
                    <li>Therapeutic Interventions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
