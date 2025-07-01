import { useEffect, useState } from "react";
import { socket } from "../features/chat/services/socket"; // socket.io client instance
import { getAllParentService } from "../features/chat/services/getAllParent";
import { getAllParentApplicationsService } from "../features/chat/services/getAllapplications";

export default function Chat() {
  const [parents, setParents] = useState([]);
  const [applications, setApplications] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [userId, setUserId] = useState(null); // kendi userId (admin)

  useEffect(() => {
    async function fetchData() {
      const result = await getAllParentService();
      const result2 = await getAllParentApplicationsService();
      setParents(result);
      setApplications(result2);
    }
    fetchData();
  }, []);

  useEffect(() => {
    socket.connect();

    // Kendi userId'ni al
    socket.on("connectedUser", (id) => {
      setUserId(id);
    });

    // Mesaj geldiğinde
    socket.on("getMessage", (data) => {
      setMessages((prev) => {
        const chatId =
          data.senderId === userId ? data.receiverId : data.senderId;
        const oldMessages = prev[chatId] || [];
        return {
          ...prev,
          [chatId]: [...oldMessages, data],
        };
      });
    });

    return () => {
      socket.off("connectedUser");
      socket.off("getMessage");
      socket.disconnect();
    };
  }, [userId]);

  // Veliyi seçince o veli ile sohbet aç
  const handleSelectParent = (parentId) => {
    setActiveChat(parentId);

    // Odaya katıl (gerekirse)
    // Burada backend zaten userId odasına katılıyor, ekstra oda yönetimine gerek kalmayabilir
  };

  const handleSend = () => {
    if (!newMessage.trim() || !activeChat) return;

    const messageData = {
      senderId: userId,
      receiverId: activeChat,
      text: newMessage,
    };

    socket.emit("sendMessage", messageData);

    // Mesajı kendi state'ine ekle
    setMessages((prev) => {
      const oldMessages = prev[activeChat] || [];
      return {
        ...prev,
        [activeChat]: [...oldMessages, messageData],
      };
    });

    setNewMessage("");
  };

  // Filtrelenmiş velileri başarı durumuna göre al
  const successParentIds = applications
    .filter((app) => app.status === "approved")
    .map((app) => app.parentId);

  const filteredParents = parents.filter((parent) =>
    successParentIds.includes(parent._id)
  );

  return (
    <div className="grid grid-cols-4 h-screen bg-white">
      <aside className="col-span-1 border-r border-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4 text-[#007BFF]">Veliler</h2>
        <ul className="space-y-2">
          {filteredParents.map((parent) => (
            <li
              key={parent._id}
              onClick={() => handleSelectParent(parent._id)}
              className={`cursor-pointer px-4 py-2 rounded-xl hover:bg-[#007BFF]/10 transition-all ${
                activeChat === parent._id ? "bg-[#007BFF]/20 font-bold" : ""
              }`}
            >
              {parent.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className="col-span-3 p-6 flex flex-col">
        <h2 className="text-2xl font-semibold text-[#007BFF] mb-4">
          {filteredParents.find((p) => p._id === activeChat)?.name ||
            "Sohbet Seçiniz"}
        </h2>

        <div className="flex-1 border border-gray-200 rounded-xl p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-3">
            {(messages[activeChat] || []).map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                  msg.senderId === userId
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
            disabled={!activeChat}
            className={`bg-[#007BFF] text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition ${
              !activeChat ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Gönder
          </button>
        </div>
      </main>
    </div>
  );
}
