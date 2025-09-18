"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, Send, Plus, Bot, User, Paperclip, FileImage, FileText, ImageIcon } from "lucide-react";
import BackgroundFlag from "@/components/ui/BackgroundFlag";

type Message = {
  id: number;
  sender: "user" | "ai";
  text?: string;
  imageUrl?: string;
  isLoading?: boolean;
};

export default function ChatApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [uploadOpen, setUploadOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const prompt = input.trim();
    if (!prompt || isLoading) return;

    const userMessage: Message = { id: Date.now() + Math.random(), sender: "user", text: prompt };
    setMessages((prev) => [...prev, userMessage]);
    
    setInput("");
    setIsLoading(true);

    if (prompt.toLowerCase().startsWith("/image") || prompt.toLowerCase().startsWith("create an image")) {
      await handleGenerateImage(prompt);
    } else {
      await handleGetChatResponse(prompt);
    }
    setIsLoading(false);
  };

  const handleGetChatResponse = async (prompt: string) => {
    const loadingMessageId = Date.now() + Math.random();
    setMessages((prev) => [...prev, { id: loadingMessageId, sender: 'ai', isLoading: true }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('Failed to get a response from the AI.');
      
      const data = await response.json();
      const aiMessage: Message = { id: loadingMessageId, sender: "ai", text: data.text };
      
      setMessages(prev => prev.map(msg => msg.id === loadingMessageId ? aiMessage : msg));

    } catch (err) {
      const errorMessage: Message = { id: loadingMessageId, sender: 'ai', text: "Sorry, I ran into an error. Please try again." };
      setMessages(prev => prev.map(msg => msg.id === loadingMessageId ? errorMessage : msg));
    }
  };

  const handleGenerateImage = async (prompt: string) => {
    const loadingMessageId = Date.now() + Math.random();
    setMessages((prev) => [...prev, { id: loadingMessageId, sender: 'ai', isLoading: true }]);
    
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('Failed to generate image.');

      const data = await response.json();
      const imageUrl = `data:image/png;base64,${data.imageData}`;
      const aiImageMessage: Message = { id: loadingMessageId, sender: 'ai', imageUrl: imageUrl };

      setMessages(prev => prev.map(msg => msg.id === loadingMessageId ? aiImageMessage : msg));

    } catch (err) {
      const errorMessage: Message = { id: loadingMessageId, sender: 'ai', text: "Sorry, I couldn't create that image. Please try another prompt." };
      setMessages(prev => prev.map(msg => msg.id === loadingMessageId ? errorMessage : msg));
    }
  };

  const handleNewChat = () => setMessages([]);

  return (
    <>
      <BackgroundFlag /> 
      <div className="flex h-screen text-white ">
        {sidebarOpen && (
          <div className="w-64 bg-zinc-900 p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-orange-500">BhagwaAI</h2>
            <button onClick={handleNewChat} className="flex items-center gap-2 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-md text-sm font-medium mb-4">
              <Plus size={16} /> New Chat
            </button>
            <div className="flex-1 overflow-y-auto space-y-2">
              <p className="p-2 text-sm text-gray-300 hover:bg-zinc-800 rounded">Example Chat 1</p>
              <p className="p-2 text-sm text-gray-300 hover:bg-zinc-800 rounded">Example Chat 2</p>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col relative">
          <div className="flex items-center justify-between bg-zinc-950 p-3 border-b border-zinc-800">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-zinc-800 rounded"><Menu size={22} /></button>
            <h1 className="text-lg font-semibold">Chat with BhagwaAI</h1>
            <div />
          </div>

          <div className="flex-1 flex flex-col overflow-y-hidden">
            {messages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <ImageIcon size={48} className="text-orange-500 mb-4" />
                <h1 className="text-2xl font-bold mb-2 text-orange-400">BhagwaAI Chat & Image</h1>
                <p className="text-gray-400 mb-6 max-w-lg">Ask a question for a text response, or start your prompt with <code className="bg-zinc-800 px-1 py-0.5 rounded text-orange-400">/image</code> to create a picture.</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex items-start gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.sender === "ai" && <div className="bg-zinc-800 p-2 rounded-full mt-1"><Bot size={18} /></div>}
                    <div className={`px-4 py-2 rounded-2xl max-w-lg md:max-w-2xl ${msg.sender === "user" ? "bg-orange-500 text-white rounded-br-none" : "bg-zinc-800 text-gray-200 rounded-bl-none"}`}>
                      {msg.isLoading && <span className="animate-pulse">Thinking...</span>}
                      {msg.text && <div className="whitespace-pre-wrap">{msg.text}</div>}
                      {msg.imageUrl && <img src={msg.imageUrl} alt="Generated by AI" className="rounded-lg max-w-full h-auto" />}
                    </div>
                    {msg.sender === "user" && <div className="bg-orange-500 p-2 rounded-full mt-1"><User size={18} /></div>}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
            
            <div className="p-4 border-t border-zinc-800">
              <div className="w-full max-w-2xl mx-auto flex items-center bg-zinc-900 rounded-full px-4 py-2 border border-zinc-700 relative">
                <input
                  type="text"
                  placeholder={isLoading ? "BhagwaAI is thinking..." : "Ask a question or use /image..."}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-transparent outline-none px-2"
                  disabled={isLoading}
                />
                <button onClick={handleSend} className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full flex items-center gap-2 disabled:bg-orange-800 disabled:cursor-not-allowed" disabled={isLoading}>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}