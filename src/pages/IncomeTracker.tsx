import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Search, 
  Filter, 
  Download, 
  Plus,
  Eye,
  Edit,
  Trash2,
  RefreshCw,
  Bell,
  Moon,
  Sun,
  Target,
  BarChart3,
  PieChart,
  Lightbulb
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import IncomeForm from "@/components/IncomeForm";
import { useTheme } from "@/contexts/ThemeContext";

const IncomeTracker = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedEntries, setSelectedEntries] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMonth, setFilterMonth] = useState("all");
  const [showRecurring, setShowRecurring] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [goalAmount, setGoalAmount] = useState(50000);

  // Sample data
  const [incomeEntries, setIncomeEntries] = useState([
    { id: 1, source: "Salary", amount: 35000, category: "Employment", date: "2024-01-15", method: "Bank Transfer", recurring: true, frequency: "Monthly" },
    { id: 2, source: "Freelance Project", amount: 8000, category: "Freelance", date: "2024-01-10", method: "UPI", recurring: false },
    { id: 3, source: "Stock Dividends", amount: 1500, category: "Investment", date: "2024-01-05", method: "Bank Transfer", recurring: true, frequency: "Quarterly" },
    { id: 4, source: "Side Business", amount: 6000, category: "Business", date: "2024-01-20", method: "Cash", recurring: false },
  ]);

  const handleAddIncome = (data: any) => {
    const newEntry = {
      id: incomeEntries.length + 1,
      ...data
    };
    setIncomeEntries(prev => [...prev, newEntry]);
  };

  const totalIncome = incomeEntries.reduce((sum, entry) => sum + entry.amount, 0);
  const goalProgress = (totalIncome / goalAmount) * 100;

  const recurringEntries = incomeEntries.filter(entry => entry.recurring);

  const handleSelectAll = () => {
    if (selectedEntries.length === incomeEntries.length) {
      setSelectedEntries([]);
    } else {
      setSelectedEntries(incomeEntries.map(entry => entry.id));
    }
  };

  const handleSelectEntry = (id: number) => {
    setSelectedEntries(prev => 
      prev.includes(id) 
        ? prev.filter(entryId => entryId !== id)
        : [...prev, id]
    );
  };

  const filteredEntries = incomeEntries.filter(entry => {
    const matchesSearch = entry.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = filterMonth === "all" || 
                        new Date(entry.date).getMonth() === parseInt(filterMonth);
    return matchesSearch && matchesMonth;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Income Tracker</h1>
            <p className="text-muted-foreground">Monitor and analyze your income streams</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
              <Moon className="h-4 w-4" />
            </div>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="INR">INR</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
              </SelectContent>
            </Select>
            <IncomeForm onSubmit={handleAddIncome} />
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Income</p>
                  <p className="text-2xl font-bold text-foreground">₹{totalIncome.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% from last month
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Goal</p>
                  <p className="text-2xl font-bold text-foreground">₹{goalAmount.toLocaleString()}</p>
                  <Progress value={goalProgress} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-1">{goalProgress.toFixed(1)}% achieved</p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Sources</p>
                  <p className="text-2xl font-bold text-foreground">{incomeEntries.length}</p>
                  <p className="text-xs text-muted-foreground mt-1">{recurringEntries.length} recurring</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg per Source</p>
                  <p className="text-2xl font-bold text-foreground">₹{(totalIncome / incomeEntries.length).toFixed(0)}</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Bell className="h-3 w-3 mr-1" />
                    2 payments due
                  </p>
                </div>
                <PieChart className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights Panel */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              AI-Powered Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Optimization Tip</h4>
                <p className="text-sm text-muted-foreground">Your freelance income has grown 40% this quarter. Consider raising your rates!</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold text-blue-600 mb-2">Trend Alert</h4>
                <p className="text-sm text-muted-foreground">Stock dividends are due next week. Expected: ₹1500</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold text-purple-600 mb-2">Goal Progress</h4>
                <p className="text-sm text-muted-foreground">You're 85% towards your monthly goal. Great progress!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="entries">Income Entries</TabsTrigger>
            <TabsTrigger value="recurring">Recurring Income</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-card border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Top Income Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {incomeEntries.slice(0, 3).map((entry, index) => (
                      <div key={entry.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                          <span className="font-medium">{entry.source}</span>
                        </div>
                        <span className="font-bold">₹{entry.amount}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Income vs Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Income</span>
                      <span className="font-bold text-green-600">₹{totalIncome}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Estimated Expenses</span>
                      <span className="font-bold text-red-500">₹42,000</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center font-bold">
                        <span>Net Income</span>
                        <span className="text-green-600">₹{totalIncome - 42000}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="entries" className="space-y-6">
            {/* Controls */}
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search income sources..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full sm:w-64"
                      />
                    </div>
                    <Select value={filterMonth} onValueChange={setFilterMonth}>
                      <SelectTrigger className="w-full sm:w-40">
                        <SelectValue placeholder="Filter by month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Months</SelectItem>
                        <SelectItem value="0">January</SelectItem>
                        <SelectItem value="1">February</SelectItem>
                        <SelectItem value="2">March</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    {selectedEntries.length > 0 && (
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete ({selectedEntries.length})
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Income Table */}
            <Card className="bg-card border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Income Entries</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      checked={selectedEntries.length === incomeEntries.length}
                      onCheckedChange={handleSelectAll}
                    />
                    <span className="text-sm text-muted-foreground">Select All</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Select</th>
                        <th className="text-left py-2">Source</th>
                        <th className="text-left py-2">Amount</th>
                        <th className="text-left py-2">Category</th>
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Method</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEntries.map((entry) => (
                        <tr key={entry.id} className="border-b hover:bg-accent">
                          <td className="py-3">
                            <Checkbox 
                              checked={selectedEntries.includes(entry.id)}
                              onCheckedChange={() => handleSelectEntry(entry.id)}
                            />
                          </td>
                          <td className="py-3 font-medium">{entry.source}</td>
                          <td className="py-3 font-bold text-green-600">₹{entry.amount}</td>
                          <td className="py-3">
                            <Badge variant="secondary">{entry.category}</Badge>
                          </td>
                          <td className="py-3">{entry.date}</td>
                          <td className="py-3">{entry.method}</td>
                          <td className="py-3">
                            {entry.recurring ? (
                              <Badge className="bg-green-100 text-green-800">
                                <RefreshCw className="h-3 w-3 mr-1" />
                                Recurring
                              </Badge>
                            ) : (
                              <Badge variant="outline">One-time</Badge>
                            )}
                          </td>
                          <td className="py-3">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recurring" className="space-y-6">
            <Card className="bg-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recurring Income Sources</CardTitle>
                <CardDescription>
                  Manage your regular income streams and track upcoming payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recurringEntries.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <RefreshCw className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{entry.source}</h4>
                          <p className="text-sm text-muted-foreground">{entry.frequency} • ₹{entry.amount}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{entry.amount}</p>
                        <p className="text-sm text-muted-foreground">Next: Feb 15, 2024</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default IncomeTracker;
