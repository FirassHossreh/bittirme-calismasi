import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: "school", text: "Merhaba! Size nasıl yardımcı olabilirim?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { from: "parent", text: newMessage }]);
    setNewMessage("");
    // burada backend'e gönderme işlemi yapılabilir
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg flex flex-col h-[600px] border border-[#007BFF]">
      <div className="bg-[#007BFF] text-white text-center py-3 font-semibold rounded-t-lg">
        Anaokulu ile Mesajlaşma
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.from === "parent" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-[75%] text-sm ${
                msg.from === "parent"
                  ? "bg-[#007BFF] text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-200 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#007BFF]"
          placeholder="Mesaj yaz..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          onClick={handleSend}
          className="bg-[#007BFF] text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
        >
          Gönder
        </button>
      </div>
    </div>
  );
}
