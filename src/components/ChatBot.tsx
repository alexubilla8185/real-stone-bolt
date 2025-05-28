import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hi there! How can I help you with your stone selection today?', isUser: false },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    // Simulate response (in a real app, this would be an API call)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Thank you for your message! Our team will get back to you shortly. If you need immediate assistance, please call us at 772-489-9964.",
          isUser: false,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gold text-white rounded-full p-4 shadow-lg z-50 hover:bg-gold-dark transition-colors"
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-gold text-white rounded-t-lg p-4">
          <h3 className="font-medium">Real Stone & Granite Chat</h3>
          <p className="text-sm text-white/80">We typically reply within minutes</p>
        </div>

        <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[80%] ${
                message.isUser
                  ? 'bg-gold/10 text-gray-800 self-end'
                  : 'bg-gray-100 text-gray-800 self-start'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t p-4">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="bg-gold text-white px-4 py-2 rounded-r-md hover:bg-gold-dark"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;