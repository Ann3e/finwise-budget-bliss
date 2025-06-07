
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Video, 
  Download, 
  ExternalLink,
  Search,
  Filter,
  Clock,
  Star,
  TrendingUp,
  DollarSign,
  PieChart,
  Calculator,
  Target,
  Shield,
  Lightbulb,
  Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

const Resources = () => {
  const resourceCategories = [
    { name: "All", count: 48, active: true },
    { name: "Budgeting", count: 12, active: false },
    { name: "Investing", count: 15, active: false },
    { name: "Saving", count: 10, active: false },
    { name: "Debt Management", count: 8, active: false },
    { name: "Financial Planning", count: 3, active: false }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "The Complete Budgeting Guide for Beginners",
      description: "Learn how to create and stick to a budget that works for your lifestyle.",
      type: "Article",
      readTime: "8 min read",
      category: "Budgeting",
      rating: 4.9,
      downloads: 2840,
      icon: PieChart,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Investment Basics: Stocks vs Bonds",
      description: "Understanding the fundamental differences between stocks and bonds for new investors.",
      type: "Video",
      readTime: "12 min watch",
      category: "Investing",
      rating: 4.8,
      downloads: 1950,
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Emergency Fund Calculator",
      description: "Calculate exactly how much you need in your emergency fund based on your expenses.",
      type: "Tool",
      readTime: "5 min use",
      category: "Saving",
      rating: 4.7,
      downloads: 3200,
      icon: Calculator,
      color: "bg-purple-500"
    }
  ];

  const articles = [
    {
      title: "50/30/20 Rule: The Ultimate Budgeting Strategy",
      description: "Master the most popular budgeting method used by financial experts worldwide.",
      readTime: "6 min read",
      category: "Budgeting",
      author: "Sarah Chen",
      date: "Jan 15, 2024",
      featured: true
    },
    {
      title: "How to Pay Off Debt Faster with the Snowball Method",
      description: "A proven strategy to eliminate debt and build momentum towards financial freedom.",
      readTime: "10 min read",
      category: "Debt Management",
      author: "Marcus Johnson",
      date: "Jan 12, 2024",
      featured: false
    },
    {
      title: "Building Your First Investment Portfolio",
      description: "Step-by-step guide to creating a diversified investment portfolio for beginners.",
      readTime: "15 min read",
      category: "Investing",
      author: "Emily Rodriguez",
      date: "Jan 10, 2024",
      featured: false
    },
    {
      title: "Side Hustles That Actually Make Money",
      description: "Research-backed side business ideas that can supplement your income significantly.",
      readTime: "12 min read",
      category: "Income",
      author: "David Kim",
      date: "Jan 8, 2024",
      featured: false
    }
  ];

  const tools = [
    {
      name: "Compound Interest Calculator",
      description: "See how your money grows over time with compound interest",
      icon: Calculator,
      popular: true
    },
    {
      name: "Debt Payoff Planner",
      description: "Create a strategy to pay off all your debts efficiently",
      icon: Target,
      popular: true
    },
    {
      name: "Retirement Calculator",
      description: "Plan for your retirement and see if you're on track",
      icon: Clock,
      popular: false
    },
    {
      name: "Budget Template Generator",
      description: "Create a personalized budget template for your needs",
      icon: PieChart,
      popular: false
    }
  ];

  const webinars = [
    {
      title: "Mastering Your Money Mindset",
      date: "Feb 15, 2024",
      time: "7:00 PM EST",
      speaker: "Dr. Amanda Foster",
      attendees: 1240,
      status: "upcoming"
    },
    {
      title: "Cryptocurrency for Beginners",
      date: "Feb 8, 2024",
      time: "6:30 PM EST",
      speaker: "Ryan Martinez",
      attendees: 892,
      status: "upcoming"
    },
    {
      title: "Tax Planning Strategies for 2024",
      date: "Jan 25, 2024",
      time: "7:00 PM EST",
      speaker: "Sarah Chen",
      attendees: 1560,
      status: "recorded"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial <span className="text-green-600">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to master your finances: guides, tools, calculators, and expert insights
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search resources, tools, and guides..."
              className="pl-10 h-12"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {resourceCategories.map((category) => (
            <Badge
              key={category.name}
              variant={category.active ? "default" : "secondary"}
              className={`px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white transition-colors ${
                category.active ? "bg-green-600 text-white" : ""
              }`}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-10 h-10 ${resource.color} rounded-lg flex items-center justify-center text-white`}>
                      <resource.icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary">{resource.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {resource.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {resource.rating}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{resource.downloads.toLocaleString()} downloads</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Access Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <Button variant="outline">View All</Button>
            </div>
            
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={article.featured ? "default" : "secondary"}>
                            {article.category}
                          </Badge>
                          {article.featured && (
                            <Badge className="bg-yellow-500 text-white">Featured</Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{article.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>By {article.author}</span>
                          <span>{article.date}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="ml-4">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tools */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-green-600" />
                  Financial Tools
                </CardTitle>
                <CardDescription>Calculators and planners to help you make informed decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <tool.icon className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">{tool.name}</p>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                      </div>
                      {tool.popular && (
                        <Badge variant="secondary">Popular</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Webinars */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-blue-600" />
                  Upcoming Webinars
                </CardTitle>
                <CardDescription>Live sessions with financial experts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {webinars.map((webinar, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{webinar.title}</h4>
                        <Badge variant={webinar.status === "upcoming" ? "default" : "secondary"}>
                          {webinar.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {webinar.date} at {webinar.time}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">Speaker: {webinar.speaker}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {webinar.attendees} registered
                        </span>
                        <Button size="sm" variant="outline">
                          {webinar.status === "upcoming" ? "Register" : "Watch"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                <p className="text-green-100 mb-4 text-sm">
                  Get weekly financial tips and new resource notifications
                </p>
                <div className="space-y-3">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
                  />
                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Resources;
