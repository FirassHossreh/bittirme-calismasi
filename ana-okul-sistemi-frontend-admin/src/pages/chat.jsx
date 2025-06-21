import { useState } from "react";

const parents = [
  { id: 1, name: "Ahmet Yılmaz" },
  { id: 2, name: "Ayşe Demir" },
  { id: 3, name: "Mehmet Çelik" },
];

const messagesMock = {
  1: [
    { sender: "parent", text: "Merhaba öğretmenim." },
    { sender: "admin", text: "Merhaba Ahmet Bey, nasılsınız?" },
  ],
  2: [],
  3: [],
};
export default function Chat() {
  const [activeChat, setActiveChat] = useState(1);
  const [messages, setMessages] = useState(messagesMock);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const updated = {
      ...messages,
      [activeChat]: [
        ...messages[activeChat],
        { sender: "admin", text: newMessage },
      ],
    };
    setMessages(updated);
    setNewMessage("");
  };

  return (
    <>
      <div className="grid grid-cols-4 h-screen bg-white">
        <aside className="col-span-1 border-r border-gray-200 p-4">
          <h2 className="text-xl font-semibold mb-4 text-[#007BFF]">Veliler</h2>
          <ul className="space-y-2">
            {parents.map((parent) => (
              <li
                key={parent.id}
                onClick={() => setActiveChat(parent.id)}
                className={`cursor-pointer px-4 py-2 rounded-xl hover:bg-[#007BFF]/10 transition-all ${
                  activeChat === parent.id ? "bg-[#007BFF]/20 font-bold" : ""
                }`}
              >
                {parent.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="col-span-3 p-6 flex flex-col">
          <h2 className="text-2xl font-semibold text-[#007BFF] mb-4">
            {parents.find((p) => p.id === activeChat)?.name}
          </h2>

          <div className="flex-1 border border-gray-200 rounded-xl p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              {messages[activeChat]?.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                    msg.sender === "admin"
                      ? "bg-[#007BFF] text-white self-end ml-auto"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
              placeholder="Mesaj yazın..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-[#007BFF] text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
            >
              Gönder
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
