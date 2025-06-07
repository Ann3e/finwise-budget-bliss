
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">FINWIN Assistant</h3>
            <p className="text-sm text-green-100">How can I help you today?</p>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">Hello! I'm your personal finance assistant. I can help you with:</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li>• Budget planning</li>
                  <li>• Expense tracking tips</li>
                  <li>• Investment advice</li>
                  <li>• Financial goals</li>
                </ul>
              </div>
              <div className="bg-green-100 p-3 rounded-lg ml-8">
                <p className="text-sm">What would you like to know?</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-green-500"
                disabled
              />
              <Button size="sm" className="bg-green-600 hover:bg-green-700" disabled>
                Send
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">AI integration coming soon!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
