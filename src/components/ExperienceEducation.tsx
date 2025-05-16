import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { EducationData, ExperienceData } from "../Constants.js";

const TimelineList = ({ data }: { data: typeof ExperienceData }) => (
  <div className="space-y-6">
    <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
      {data.map((item, index) => (
        <div key={index} className="mb-10 relative">
          <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
          <Card className="border-none shadow-sm hover-lift">
            <CardContent className="p-6 whitespace-pre-line">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="font-bold text-xl text-gray-800">
                  {item.title}
                </h3>
                <span className="text-primary font-medium">{item.time}</span>
              </div>
              <p className="text-gray-500 font-medium mb-3">{item.place}</p>
              <p className="text-gray-600">
                <ul className="list-disc list-inside">
                  {item.description
                    .split("\n")
                    .map((line, index) =>
                      line.trim() ? <li key={index}>{line.trim()}</li> : null
                    )}
                </ul>
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceEducation = () => {
  return (
    <section id="experience-education" className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="heading-lg text-gray-800 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-gray-600 max-w-3xl text-lg">
            My academic journey and professional experience in the field of
            psychology.
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-muted/80">
            <TabsTrigger
              value="experience"
              className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <BriefcaseBusiness className="mr-2 h-5 w-5" />
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="animate-fade-in">
            <TimelineList data={ExperienceData} />
          </TabsContent>

          <TabsContent value="education" className="animate-fade-in">
            <TimelineList data={EducationData} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceEducation;
