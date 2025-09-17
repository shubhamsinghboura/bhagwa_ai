"use client";
import { useState } from "react";
import { Menu, Send, Plus, Bot, User, Paperclip, FileImage, FileText } from "lucide-react";
import BackgroundFlag from "@/components/ui/BackgroundFlag";

type Message = {
  sender: "user" | "ai";
  text: string;
};

export default function ChatApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [uploadOpen, setUploadOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Mock AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "This is an AI response to: " + input },
      ]);
    }, 800);

    setInput("");
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleUpload = (type: string) => {
    alert(`You selected: ${type}`);
    setUploadOpen(false);
  };
  return (
<>
    <BackgroundFlag/>

    <div className="flex h-screen text-white">
      {sidebarOpen && (
        <div className="w-64 bg-zinc-900 p-4 flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-orange-500">BhagwaAI</h2>

          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-md text-sm font-medium mb-4"
          >
            <Plus size={16} /> New Chat
          </button>

          <div className="flex-1 overflow-y-auto space-y-2">
            <p className="p-2 hover:bg-zinc-800 rounded">Chat 1</p>
            <p className="p-2 hover:bg-zinc-800 rounded">Chat 2</p>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col relative">
        <div className="flex items-center justify-between bg-zinc-950 p-3 border-b border-zinc-800">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-zinc-800 rounded"
          >
            <Menu size={22} />
          </button>
          <h1 className="text-lg font-semibold">Chat with BhagwaAI</h1>
          <div />
        </div>

        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-2xl font-bold mb-2 text-orange-400">
              Hello, Devansh 👋
            </h1>
            <p className="text-gray-400 mb-6 max-w-lg">
              Ask me anything about culture, knowledge, or wisdom. I’m here to
              assist you with devotion & intelligence.
            </p>

            <div className="w-full max-w-xl flex items-center bg-zinc-900 rounded-full px-4 py-2 border border-zinc-700 relative">
              <button
                onClick={() => setUploadOpen(!uploadOpen)}
                className="p-2 hover:bg-zinc-800 rounded-full"
              >
                <Paperclip size={18} />
              </button>

              <input
                type="text"
                placeholder="Ask BhagwaAI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-transparent outline-none px-2"
              />
              <button
                onClick={handleSend}
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full flex items-center gap-2"
              >
                <Send size={18} />
                Send
              </button>

              {/* Mini modal for upload */}
              {uploadOpen && (
                <div className="absolute bottom-14 left-4 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg w-40">
                  <button
                    onClick={() => handleUpload("Upload Image")}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 w-full text-left"
                  >
                    <FileImage size={16} /> Upload Image
                  </button>
                  <button
                    onClick={() => handleUpload("Upload Doc")}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 w-full text-left"
                  >
                    <FileText size={16} /> Upload Doc
                  </button>
                </div>
              )}
            </div>


          </div>
        ) : (
          /* Chat Screen */
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  {msg.sender === "ai" && (
                    <div className="bg-zinc-800 p-2 rounded-full">
                      <Bot size={18} />
                    </div>
                  )}

                  <div
                    className={`px-4 py-2 rounded-2xl max-w-md ${msg.sender === "user"
                        ? "bg-orange-500 text-white rounded-br-none"
                        : "bg-zinc-800 text-gray-200 rounded-bl-none"
                      }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === "user" && (
                    <div className="bg-orange-500 p-2 rounded-full">
                      <User size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-zinc-800 relative">
              <div className="flex items-center bg-zinc-900 rounded-full px-4 py-2 border border-zinc-700 relative">
                <button
                  onClick={() => setUploadOpen(!uploadOpen)}
                  className="p-2 hover:bg-zinc-800 rounded-full"
                >
                  <Paperclip size={18} />
                </button>

                <input
                  type="text"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-transparent outline-none px-2"
                />
                <button
                  onClick={handleSend}
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <Send size={18} />
                  Send
                </button>

                {/* Mini modal for upload */}
                {uploadOpen && (
                  <div className="absolute bottom-14 left-4 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg w-40">
                    <button
                      onClick={() => handleUpload("Upload Image")}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 w-full text-left"
                    >
                      <FileImage size={16} /> Upload Image
                    </button>
                    <button
                      onClick={() => handleUpload("Upload Doc")}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 w-full text-left"
                    >
                      <FileText size={16} /> Upload Doc
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}
