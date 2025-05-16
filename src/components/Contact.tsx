import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Email, Phone1, Phone2, Location } from "../Constants.js";
import FadeInOnScroll from "./FadeInOnScroll.js";
const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="mb-16">
          <FadeInOnScroll>
            <h2 className="heading-lg text-gray-800 mb-4">Get In Touch</h2>
          </FadeInOnScroll>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-gray-600 max-w-3xl text-lg">
            Interested in collaboration or have questions about my research?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-sm bg-white hover-lift">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="bg-accent p-4 rounded-full mb-6">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-md mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Feel free to email me</p>
              <a
                href={`mailto:${Email}`}
                className="text-primary hover:text-secondary transition-custom"
              >
                {Email}
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white hover-lift">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="bg-accent p-4 rounded-full mb-6">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-md mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Call for inquiries</p>
              <a
                href={`tel:${Phone1}`}
                className="text-primary hover:text-secondary transition-custom"
              >
                {Phone1}
              </a>
              <a
                href={`tel:${Phone2}`}
                className="text-primary hover:text-secondary transition-custom"
              >
                {Phone2}
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white hover-lift">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="bg-accent p-4 rounded-full mb-6">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-md mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Based in</p>
              <span className="text-primary">{Location}</span>
            </CardContent>
          </Card>
        </div>

        {/* <Card className="mt-12 border-none shadow-md bg-white">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Message Subject"
                  className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={6}
                  className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                />
              </div>
              <Button className="bg-primary hover:bg-secondary w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default Contact;
