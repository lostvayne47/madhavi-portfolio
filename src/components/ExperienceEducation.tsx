
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const ExperienceEducation = () => {
  return (
    <section id="experience-education" className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="heading-lg text-gray-800 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-gray-600 max-w-3xl text-lg">
            My academic journey and professional experience in the field of psychology.
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-muted/80">
            <TabsTrigger value="experience" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white">
              <BriefcaseBusiness className="mr-2 h-5 w-5" /> Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white">
              <GraduationCap className="mr-2 h-5 w-5" /> Education
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="animate-fade-in">
            <div className="space-y-6">
              {/* Experience Timeline */}
              <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
                {/* Experience Item 1 */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                  <Card className="border-none shadow-sm hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="font-bold text-xl text-gray-800">Clinical Psychologist</h3>
                        <span className="text-primary font-medium">2020 - Present</span>
                      </div>
                      <p className="text-gray-500 font-medium mb-3">Mental Health Center</p>
                      <p className="text-gray-600">
                        Providing psychological assessments and therapy for individuals with various mental health concerns.
                        Specializing in cognitive behavioral therapy and trauma-focused interventions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Experience Item 2 */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                  <Card className="border-none shadow-sm hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="font-bold text-xl text-gray-800">Research Assistant</h3>
                        <span className="text-primary font-medium">2018 - 2020</span>
                      </div>
                      <p className="text-gray-500 font-medium mb-3">University Psychology Department</p>
                      <p className="text-gray-600">
                        Assisted in research studies focusing on cognitive psychology and mental health interventions.
                        Collaborated on data collection, analysis, and publication of research papers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Experience Item 3 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                  <Card className="border-none shadow-sm hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="font-bold text-xl text-gray-800">Mental Health Counselor</h3>
                        <span className="text-primary font-medium">2016 - 2018</span>
                      </div>
                      <p className="text-gray-500 font-medium mb-3">Community Wellness Center</p>
                      <p className="text-gray-600">
                        Provided counseling services to individuals and groups. Developed and implemented mental
                        health awareness programs for underserved communities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="animate-fade-in">
            <div className="space-y-6">
              {/* Education Timeline */}
              <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
                {/* Education Item 1 */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                  <Card className="border-none shadow-sm hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="font-bold text-xl text-gray-800">PhD in Clinical Psychology</h3>
                        <span className="text-primary font-medium">2016 - 2020</span>
                      </div>
                      <p className="text-gray-500 font-medium mb-3">University Name</p>
                      <p className="text-gray-600">
                        Dissertation: "Cognitive Behavioral Interventions for Anxiety Disorders in Young Adults"
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Education Item 2 */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                  <Card className="border-none shadow-sm hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="font-bold text-xl text-gray-800">Master's in Psychology</h3>
                        <span className="text-primary font-medium">2014 - 2016</span>
                      </div>
                      <p className="text-gray-500 font-medium mb-3">University Name</p>
                      <p className="text-gray-600">
                        Specialized in clinical psychology with a focus on assessment and therapeutic techniques.
                        Graduated with honors.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Education Item 3 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                  <Card className="border-none shadow-sm hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="font-bold text-xl text-gray-800">Bachelor's in Psychology</h3>
                        <span className="text-primary font-medium">2010 - 2014</span>
                      </div>
                      <p className="text-gray-500 font-medium mb-3">University Name</p>
                      <p className="text-gray-600">
                        Foundation courses in psychology, research methods, and statistics.
                        Minor in Sociology.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceEducation;
