import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Star, Target } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const values = [
    { icon: Star, title: "Excellence", description: "We strive for perfection in every cut, color, and style" },
    { icon: Heart, title: "Care", description: "Your comfort and satisfaction are our top priorities" },
    { icon: Award, title: "Expertise", description: "Years of experience and ongoing training" },
    { icon: Target, title: "Innovation", description: "Latest techniques and trends in hair styling" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-6">More About us </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where passion for beauty meets exceptional target, We've been boosting confidence since our inception. Our dedicated team of professionals is committed to delivering personalized services that cater to your unique style and needs.
            </p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <img
                src={teamImage}
                alt="Luxe Salon Team"
                className="w-full h-[500px] object-cover rounded-lg shadow-strong"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Our success Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded early in the 2022,  began with a simple vision: to create a space where artistry and luxury come together to deliver an unparalleled hair styling experience
                </p>
                <p>
                  It What started as a small boutique salon has grown into a premier destination for hair care, attracting clients who appreciate the finer details of professional styling.
                </p>
                <p>
                  Our team of expert s brings together decades of combined experience, staying ahead of trends while mastering timeless techniques. We believe that every client deserves personalized attention and a look that reflects their individuality.
                </p>
                <p>
                  At Sisters Salon, we don't just style hair – we create experiences, build strong relationships and foster a community of beauty enthusiasts. Join us on this journey and discover the true meaning of luxury hair care.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide exceptional hair and beauty care services that enhance natural beauty, boost confidence, and create lasting impressions. We're committed to using premium products and staying at the forefront of industry innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted ,reliable and sought-after salon in the region, known for our artistry, professionalism, and dedication to client satisfaction. We aspire to set new standards in our hair care.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-soft hover:shadow-medium smooth-transition">
                  <CardContent className="pt-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hours */}
          <Card className="border-none shadow-soft max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-serif font-bold text-center mb-6">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Mon - Fri</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Sat</span>
                  <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Sun</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
