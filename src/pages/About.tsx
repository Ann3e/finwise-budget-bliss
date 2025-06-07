
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Target,
  Heart,
  Award,
  Lightbulb,
  Globe,
  Clock,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

const About = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Smart Tracking",
      description: "AI-powered expense categorization and budget optimization"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Bank-level security with end-to-end encryption"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Set and achieve financial goals with gamified challenges"
    },
    {
      icon: Users,
      title: "Community",
      description: "Learn from a community of smart savers and investors"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former Goldman Sachs analyst with 10+ years in fintech",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-founder",
      bio: "Ex-Google engineer specializing in AI and machine learning",
      avatar: "MJ"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "UX expert focused on making finance accessible to everyone",
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Lead Data Scientist",
      bio: "PhD in Economics, passionate about behavioral finance",
      avatar: "DK"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a simple idea: make personal finance fun and engaging"
    },
    {
      year: "2023",
      title: "10K Users",
      description: "Reached our first major milestone with users saving over $2M collectively"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched smart budgeting with machine learning recommendations"
    },
    {
      year: "2024",
      title: "100K Users",
      description: "Growing community of financially empowered individuals"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-green-600">About</span>
            <span className="text-gray-900"> FINWIN</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize financial wellness through innovative technology, 
            gamification, and community-driven learning.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-green-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals with the tools, knowledge, and motivation they need to 
                achieve financial freedom. We believe that everyone deserves access to smart 
                financial management tools that are both powerful and easy to use.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                A world where financial literacy is universal, where managing money is 
                intuitive and engaging, and where everyone has the opportunity to build 
                wealth and achieve their dreams through smart financial decisions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose FINWIN?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <Globe className="h-8 w-8 mx-auto mb-2 opacity-90" />
                  <p className="text-3xl font-bold">100K+</p>
                  <p className="opacity-90">Active Users</p>
                </div>
                <div>
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-90" />
                  <p className="text-3xl font-bold">$50M+</p>
                  <p className="opacity-90">Money Saved</p>
                </div>
                <div>
                  <Award className="h-8 w-8 mx-auto mb-2 opacity-90" />
                  <p className="text-3xl font-bold">4.9/5</p>
                  <p className="opacity-90">User Rating</p>
                </div>
                <div>
                  <Heart className="h-8 w-8 mx-auto mb-2 opacity-90" />
                  <p className="text-3xl font-bold">98%</p>
                  <p className="opacity-90">Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Journey</h2>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <Card className="flex-1 bg-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{milestone.year}</Badge>
                      <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Transparency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We believe in complete transparency in fees, data usage, and how our algorithms work. 
                  No hidden costs, no surprise charges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Security First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Your financial data is precious. We use bank-level encryption and never sell 
                  your personal information to third parties.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Financial wellness is a journey best taken together. We foster a supportive 
                  community where users help each other succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="bg-gray-900 text-white border-0 shadow-lg">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have already taken control of their finances with FINWIN. 
                Start tracking, saving, and growing your wealth today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started Free
                </button>
                <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default About;
