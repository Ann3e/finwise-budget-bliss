
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Star, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import ReviewCarousel from "@/components/ReviewCarousel";

const Index = () => {
  const [coffeePrice, setCoffeePrice] = useState<number>(5);
  const [cupsPerDay, setCupsPerDay] = useState<number>(2);
  const [monthlySavings, setMonthlySavings] = useState<number>(500);
  const [timeYears, setTimeYears] = useState<number>(10);

  const monthlyCoffeeCost = coffeePrice * cupsPerDay * 30;
  const futureWealth = monthlySavings * 12 * timeYears * 1.07; // 7% annual return

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-50"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-green-600">FIN</span>
            <span className="text-gray-900">WIN</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed">
            Master Your Money, Win Your Future
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Take control of your finances with smart tracking, intelligent insights, and gamified challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/income-tracker">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Start Tracking Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Smart Financial Calculators</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Coffee Cost Calculator */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Coffee Cost Calculator
                </CardTitle>
                <CardDescription className="text-green-100">
                  See how much your daily coffee habit really costs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Coffee Price ($)</label>
                    <Input
                      type="number"
                      value={coffeePrice}
                      onChange={(e) => setCoffeePrice(Number(e.target.value))}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Cups per Day</label>
                    <Input
                      type="number"
                      value={cupsPerDay}
                      onChange={(e) => setCupsPerDay(Number(e.target.value))}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">${monthlyCoffeeCost.toFixed(2)}</p>
                      <p className="text-gray-600">Monthly Coffee Cost</p>
                      <p className="text-lg font-semibold text-gray-800 mt-2">${(monthlyCoffeeCost * 12).toFixed(2)}/year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wealth Calculator */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader className="bg-gray-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Future Wealth Calculator
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Calculate your potential wealth from consistent savings
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Savings ($)</label>
                    <Input
                      type="number"
                      value={monthlySavings}
                      onChange={(e) => setMonthlySavings(Number(e.target.value))}
                      className="border-gray-300 focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Time Period (Years)</label>
                    <Input
                      type="number"
                      value={timeYears}
                      onChange={(e) => setTimeYears(Number(e.target.value))}
                      className="border-gray-300 focus:border-gray-500"
                    />
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">${futureWealth.toLocaleString()}</p>
                      <p className="text-gray-600">Estimated Future Value</p>
                      <p className="text-sm text-gray-500 mt-2">*Assuming 7% annual return</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewCarousel />

      {/* Subscription Plans */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Choose Your Plan</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <Card className="shadow-lg border-2 border-gray-200 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">$0</div>
                <p className="text-gray-600">Forever</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Basic expense tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Simple budgeting tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Monthly reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Basic challenges</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="shadow-lg border-2 border-green-600 bg-white relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>For serious financial management</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">$9.99</div>
                <p className="text-gray-600">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Advanced analytics & insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Unlimited categories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Premium challenges & rewards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Start Premium Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Index;
