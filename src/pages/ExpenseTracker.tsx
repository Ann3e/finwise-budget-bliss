
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  PieChart, 
  TrendingDown, 
  AlertTriangle,
  Settings,
  Plus,
  ShoppingCart,
  Utensils,
  Car,
  Lightbulb,
  Home,
  Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

const ExpenseTracker = () => {
  const [totalBudget, setTotalBudget] = useState(15000);
  const [categoryWeights, setCategoryWeights] = useState({
    food: 40,
    travel: 20,
    shopping: 30,
    misc: 10
  });

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Grocery Shopping", amount: 150, category: "food", date: "2024-01-15" },
    { id: 2, description: "Uber Ride", amount: 25, category: "travel", date: "2024-01-14" },
    { id: 3, description: "New Shirt", amount: 45, category: "shopping", date: "2024-01-13" },
    { id: 4, description: "Coffee", amount: 5, category: "misc", date: "2024-01-12" },
  ]);

  const categories = [
    { 
      key: "food", 
      name: "Food", 
      icon: Utensils, 
      color: "bg-orange-500",
      emoji: "🍕"
    },
    { 
      key: "travel", 
      name: "Travel", 
      icon: Car, 
      color: "bg-blue-500",
      emoji: "🚇"
    },
    { 
      key: "shopping", 
      name: "Shopping", 
      icon: ShoppingCart, 
      color: "bg-purple-500",
      emoji: "🛍"
    },
    { 
      key: "misc", 
      name: "Miscellaneous", 
      icon: Lightbulb, 
      color: "bg-gray-500",
      emoji: "💡"
    }
  ];

  const calculateAllocations = () => {
    return categories.map(category => ({
      ...category,
      percentage: categoryWeights[category.key as keyof typeof categoryWeights],
      allocated: (totalBudget * categoryWeights[category.key as keyof typeof categoryWeights]) / 100,
      spent: expenses
        .filter(expense => expense.category === category.key)
        .reduce((sum, expense) => sum + expense.amount, 0)
    }));
  };

  const allocations = calculateAllocations();
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = totalBudget - totalSpent;

  const handleWeightChange = (category: string, value: number[]) => {
    const newValue = value[0];
    const currentTotal = Object.values(categoryWeights).reduce((sum, weight) => sum + weight, 0);
    const otherCategories = Object.keys(categoryWeights).filter(key => key !== category);
    
    // Distribute the remaining percentage among other categories
    const remaining = 100 - newValue;
    const currentOthersTotal = otherCategories.reduce((sum, key) => sum + categoryWeights[key as keyof typeof categoryWeights], 0);
    
    const newWeights = { ...categoryWeights, [category]: newValue };
    
    if (currentOthersTotal > 0) {
      otherCategories.forEach(key => {
        const proportion = categoryWeights[key as keyof typeof categoryWeights] / currentOthersTotal;
        newWeights[key as keyof typeof categoryWeights] = Math.round(remaining * proportion);
      });
    }
    
    setCategoryWeights(newWeights);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Expense Tracker</h1>
            <p className="text-gray-600">Track expenses and manage your budget intelligently</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 mt-4 sm:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Add Expense
          </Button>
        </div>

        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Budget</p>
                  <p className="text-2xl font-bold text-gray-900">₹{totalBudget.toLocaleString()}</p>
                </div>
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-red-600">₹{totalSpent.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{((totalSpent / totalBudget) * 100).toFixed(1)}% of budget</p>
                </div>
                <CreditCard className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Remaining</p>
                  <p className="text-2xl font-bold text-green-600">₹{remainingBudget.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{((remainingBudget / totalBudget) * 100).toFixed(1)}% left</p>
                </div>
                <TrendingDown className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Categories</p>
                  <p className="text-2xl font-bold text-purple-600">{categories.length}</p>
                  <p className="text-xs text-gray-500">Active tracking</p>
                </div>
                <PieChart className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="budget" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="budget">Budget Allocation</TabsTrigger>
            <TabsTrigger value="expenses">Track Expenses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="budget" className="space-y-6">
            {/* Budget Setup */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Set Your Monthly Budget</CardTitle>
                <CardDescription>
                  Define your total budget and allocate it across categories using sliders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Total Monthly Budget (₹)</label>
                    <Input
                      type="number"
                      value={totalBudget}
                      onChange={(e) => setTotalBudget(Number(e.target.value))}
                      className="text-lg font-semibold"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Distribute it across categories based on how important they are to you
                    </h3>
                    
                    <div className="space-y-6">
                      {allocations.map((category) => (
                        <div key={category.key} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{category.emoji}</span>
                              <span className="font-medium">{category.name}</span>
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-lg">₹{category.allocated.toLocaleString()}</span>
                              <span className="text-gray-500 ml-2">({category.percentage}%)</span>
                            </div>
                          </div>
                          
                          <div className="px-4">
                            <Slider
                              value={[category.percentage]}
                              onValueChange={(value) => handleWeightChange(category.key, value)}
                              max={80}
                              min={5}
                              step={5}
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>5%</span>
                              <span>80%</span>
                            </div>
                          </div>

                          <div className="bg-gray-100 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Spent: ₹{category.spent}</span>
                              <span className="text-sm text-gray-600">
                                Remaining: ₹{(category.allocated - category.spent).toLocaleString()}
                              </span>
                            </div>
                            <Progress 
                              value={(category.spent / category.allocated) * 100} 
                              className="mt-2"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">Smart Tip</span>
                    </div>
                    <p className="text-green-700 text-sm">
                      Most users like you spend more on Food and Travel. Start with 40%, 30%, and adjust from there.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expenses" className="space-y-6">
            {/* Add Expense Form */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Add New Expense</CardTitle>
                <CardDescription>Record your expenses and categorize them</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Description" />
                  <Input placeholder="Amount (₹)" type="number" />
                  <select className="px-3 py-2 border rounded-md">
                    <option>Select Category</option>
                    {categories.map(category => (
                      <option key={category.key} value={category.key}>
                        {category.emoji} {category.name}
                      </option>
                    ))}
                  </select>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Add Expense
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Expenses */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Expenses</CardTitle>
                <CardDescription>Your latest transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expenses.map((expense) => {
                    const category = categories.find(cat => cat.key === expense.category);
                    return (
                      <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 ${category?.color} rounded-full flex items-center justify-center text-white`}>
                            {category?.icon && <category.icon className="h-5 w-5" />}
                          </div>
                          <div>
                            <h4 className="font-medium">{expense.description}</h4>
                            <p className="text-sm text-gray-600">{expense.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-red-600">-₹{expense.amount}</p>
                          <Badge variant="secondary">{category?.name}</Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Category Breakdown */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                  <CardDescription>Your spending distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {allocations.map((category) => (
                      <div key={category.key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span>{category.emoji}</span>
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <span className="font-bold">₹{category.spent} / ₹{category.allocated.toLocaleString()}</span>
                        </div>
                        <Progress 
                          value={(category.spent / category.allocated) * 100} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{((category.spent / category.allocated) * 100).toFixed(1)}% used</span>
                          <span>₹{(category.allocated - category.spent).toLocaleString()} left</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Spending Insights</CardTitle>
                  <CardDescription>AI-powered recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        <span className="font-semibold text-yellow-800">Budget Alert</span>
                      </div>
                      <p className="text-yellow-700 text-sm">
                        You're spending more on shopping than planned. Consider adjusting your budget allocation.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Heart className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">Great Job!</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        You're staying within your food budget. Keep up the good work!
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Tip</span>
                      </div>
                      <p className="text-blue-700 text-sm">
                        Try the 50/30/20 rule: 50% needs, 30% wants, 20% savings for better financial health.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default ExpenseTracker;
