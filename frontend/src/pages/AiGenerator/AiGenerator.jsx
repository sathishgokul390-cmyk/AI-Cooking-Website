import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, ChefHat, RotateCcw } from "lucide-react";

const suggestions = [
  "What can I cook with chicken and rice?",
  "Give me a quick 15-minute breakfast idea",
  "Suggest a healthy high-protein dinner",
  "What's a good vegetarian pasta recipe?",
];

const initialMessages = [
  {
    role: "ai",
    text: "Hey there! I'm your AI Chef. Tell me what ingredients you have, your dietary preferences, or just ask for recipe ideas — I've got you covered.",
  },
];

export default function AiGenerator() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    setLoading(true);

    // Simulated AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: `Great choice! Here's a quick idea based on "${msg}": Try a simple stir-fry with your available ingredients, seasoned with garlic, soy sauce, and a pinch of chili flakes. Ready in under 20 minutes!`,
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  const reset = () => {
    setMessages(initialMessages);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#0B1120] text-black dark:text-white transition-all duration-300">
      <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col h-screen">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <ChefHat size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AI Chef</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Powered by CookAI</p>
            </div>
          </div>
          <button
            onClick={reset}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-orange-500 transition px-3 py-2 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-500/10"
          >
            <RotateCcw size={15} /> New Chat
          </button>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto space-y-5 pb-4 pr-1" style={{ scrollbarWidth: "none" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "ai" && (
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-3 shrink-0 mt-1">
                  <Sparkles size={14} className="text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                    ? "bg-orange-500 text-white rounded-br-sm"
                    : "bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-bl-sm"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-3 shrink-0">
                <Sparkles size={14} className="text-white" />
              </div>
              <div className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl rounded-bl-sm px-5 py-4 flex gap-1.5 items-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-orange-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* SUGGESTIONS */}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => sendMessage(s)}
                className="text-xs px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-black/30 hover:border-orange-400/50 hover:text-orange-500 transition"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* INPUT */}
        <div className="flex items-center gap-3 bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 shadow-sm">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask the AI Chef anything..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-400"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="w-9 h-9 rounded-xl bg-orange-500 hover:bg-orange-400 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all"
          >
            <Send size={15} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
