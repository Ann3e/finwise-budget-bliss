
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Medal, 
  Star, 
  Crown,
  Target,
  Clock,
  Keyboard,
  RotateCcw,
  CheckCircle,
  XCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

const Challenge = () => {
  const [currentWord, setCurrentWord] = useState("BUDGET");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const financeWords = [
    "BUDGET", "SAVING", "INVEST", "PROFIT", "STOCKS", "INCOME", 
    "CREDIT", "DEBIT", "ASSETS", "EQUITY", "BONDS", "MARKET"
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Johnson", score: 2850, badge: "Finance Guru", streak: 15 },
    { rank: 2, name: "Mike Chen", score: 2720, badge: "Budget Master", streak: 12 },
    { rank: 3, name: "Emily Rodriguez", score: 2650, badge: "Savings Pro", streak: 10 },
    { rank: 4, name: "David Wilson", score: 2580, badge: "Investment Ace", streak: 8 },
    { rank: 5, name: "Lisa Thompson", score: 2420, badge: "Money Saver", streak: 7 },
    { rank: 6, name: "Alex Kumar", score: 2350, badge: "Smart Spender", streak: 6 },
    { rank: 7, name: "Jessica Brown", score: 2280, badge: "Debt Crusher", streak: 5 },
    { rank: 8, name: "Ryan Martinez", score: 2150, badge: "Goal Getter", streak: 4 },
  ];

  const virtualKeyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  const maxAttempts = 6;

  const handleKeyPress = (letter: string) => {
    if (gameOver || currentGuess.length >= currentWord.length) return;
    setCurrentGuess(prev => prev + letter);
  };

  const handleBackspace = () => {
    setCurrentGuess(prev => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    if (currentGuess.length !== currentWord.length) return;
    
    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setAttempts(prev => prev + 1);
    
    if (currentGuess === currentWord) {
      setWon(true);
      setGameOver(true);
    } else if (newGuesses.length >= maxAttempts) {
      setGameOver(true);
    }
    
    setCurrentGuess("");
  };

  const resetGame = () => {
    const newWord = financeWords[Math.floor(Math.random() * financeWords.length)];
    setCurrentWord(newWord);
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setWon(false);
    setAttempts(0);
  };

  const getLetterStatus = (letter: string, position: number, guess: string) => {
    if (guess[position] === currentWord[position]) return "correct";
    if (currentWord.includes(letter)) return "present";
    return "absent";
  };

  const getKeyStatus = (letter: string) => {
    for (const guess of guesses) {
      if (guess.includes(letter)) {
        const position = guess.indexOf(letter);
        const status = getLetterStatus(letter, position, guess);
        if (status === "correct") return "bg-green-500 text-white";
        if (status === "present") return "bg-yellow-500 text-white";
        if (status === "absent") return "bg-gray-400 text-white";
      }
    }
    return "bg-gray-200 hover:bg-gray-300";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit();
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key.match(/[a-zA-Z]/)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, gameOver]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Word Challenge</h1>
          <p className="text-gray-600">Test your finance vocabulary and climb the leaderboard!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Game Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{currentWord.length}</p>
                  <p className="text-sm text-gray-600">Letters</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{attempts}/{maxAttempts}</p>
                  <p className="text-sm text-gray-600">Attempts</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Finance</p>
                  <p className="text-sm text-gray-600">Category</p>
                </CardContent>
              </Card>
            </div>

            {/* Game Board */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Word Game</span>
                  <Button 
                    onClick={resetGame} 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    New Word
                  </Button>
                </CardTitle>
                <CardDescription>Guess the finance-related word in 6 tries!</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Game Grid */}
                <div className="space-y-2 mb-6">
                  {Array.from({ length: maxAttempts }, (_, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center space-x-2">
                      {Array.from({ length: currentWord.length }, (_, colIndex) => {
                        let letter = "";
                        let bgColor = "bg-gray-100";
                        
                        if (rowIndex < guesses.length) {
                          letter = guesses[rowIndex][colIndex] || "";
                          const status = getLetterStatus(letter, colIndex, guesses[rowIndex]);
                          if (status === "correct") bgColor = "bg-green-500 text-white";
                          else if (status === "present") bgColor = "bg-yellow-500 text-white";
                          else if (status === "absent") bgColor = "bg-gray-400 text-white";
                        } else if (rowIndex === guesses.length) {
                          letter = currentGuess[colIndex] || "";
                          bgColor = letter ? "bg-blue-100 border-blue-300" : "bg-gray-100";
                        }
                        
                        return (
                          <div
                            key={colIndex}
                            className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center font-bold text-lg ${bgColor}`}
                          >
                            {letter}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Game Status */}
                {gameOver && (
                  <div className="text-center mb-6">
                    {won ? (
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="text-green-800 font-semibold">Congratulations! You guessed it!</p>
                        <p className="text-green-600">The word was: <strong>{currentWord}</strong></p>
                      </div>
                    ) : (
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                        <p className="text-red-800 font-semibold">Game Over!</p>
                        <p className="text-red-600">The word was: <strong>{currentWord}</strong></p>
                      </div>
                    )}
                  </div>
                )}

                {/* Virtual Keyboard */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center mb-4">
                    <Keyboard className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-gray-600">Virtual Keyboard</span>
                  </div>
                  
                  {virtualKeyboard.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center space-x-1">
                      {row.map((letter) => (
                        <Button
                          key={letter}
                          onClick={() => handleKeyPress(letter)}
                          disabled={gameOver}
                          className={`w-8 h-10 text-sm font-semibold ${getKeyStatus(letter)}`}
                          variant="outline"
                        >
                          {letter}
                        </Button>
                      ))}
                    </div>
                  ))}
                  
                  <div className="flex justify-center space-x-2 mt-4">
                    <Button 
                      onClick={handleBackspace}
                      disabled={gameOver || currentGuess.length === 0}
                      variant="outline"
                      className="px-6"
                    >
                      ⌫ Backspace
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={gameOver || currentGuess.length !== currentWord.length}
                      className="px-6 bg-green-600 hover:bg-green-700"
                    >
                      Enter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard */}
          <div className="space-y-6">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  Leaderboard
                </CardTitle>
                <CardDescription>Top performers this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((player) => (
                    <div 
                      key={player.rank} 
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        player.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          player.rank === 1 ? 'bg-yellow-500 text-white' :
                          player.rank === 2 ? 'bg-gray-400 text-white' :
                          player.rank === 3 ? 'bg-orange-600 text-white' :
                          'bg-gray-200 text-gray-700'
                        }`}>
                          {player.rank <= 3 ? (
                            player.rank === 1 ? <Crown className="h-4 w-4" /> :
                            <Medal className="h-4 w-4" />
                          ) : (
                            player.rank
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{player.name}</p>
                          <Badge variant="secondary" className="text-xs">
                            {player.badge}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{player.score}</p>
                        <p className="text-xs text-gray-600">🔥 {player.streak} streak</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Your Rank</p>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="font-bold text-green-800">#12</p>
                      <p className="text-green-600 text-sm">1,850 points</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Game Rules */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>How to Play</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">A</div>
                    <span>Green: Letter is in the word and in the correct position</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center text-white text-xs font-bold">B</div>
                    <span>Yellow: Letter is in the word but wrong position</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center text-white text-xs font-bold">C</div>
                    <span>Gray: Letter is not in the word</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-gray-600">All words are finance-related terms. You have 6 attempts to guess correctly!</p>
                  </div>
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

export default Challenge;
