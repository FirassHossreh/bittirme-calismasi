import { useEffect, useState } from "react";
import { socket } from "../services/socket"; // socket.io client instance
import { getApplicationService } from "../services/child-registration-application/get-application-service";

export default function ParentChat({ adminUserId }) {
  const [userId, setUserId] = useState(null);
  const [messages, setMessages] = useState({}); // chatId -> mesajlar (adminUserId tek sohbet)
  const [newMessage, setNewMessage] = useState("");
  const [applicationStatus, setAppicationStatus] = useState("");
  useEffect(() => {
    async function getApplicationStatus() {
      const result = await getApplicationService();
      setAppicationStatus(result.status);
    }
    getApplicationStatus();
  }, []);
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Socket connected, id:", socket.id);
      // joinRoom emit etmeye gerek yok, backend otomatik olarak userId odasına alıyor
    });

    socket.on("connectedUser", (id) => {
      console.log("Connected user ID received:", id);
      setUserId(id);
    });

    socket.on("getMessage", (data) => {
      console.log("Message received:", data);
      setMessages((prev) => ({
        ...prev,
        [adminUserId]: [...(prev[adminUserId] || []), data],
      }));
    });

    return () => {
      socket.off("connect");
      socket.off("connectedUser");
      socket.off("getMessage");
      socket.disconnect();
    };
  }, [adminUserId]);

  const handleSend = () => {
    if (!newMessage.trim() || !userId) return;

    const msg = {
      senderId: userId,
      receiverId: adminUserId,
      message: newMessage, // Tutarlılık için 'message' alanını kullanıyoruz
    };

    console.log("Sending message:", msg);
    socket.emit("sendMessage", msg);

    setMessages((prev) => ({
      ...prev,
      [adminUserId]: [...(prev[adminUserId] || []), msg],
    }));

    setNewMessage("");
  };

  const currentMessages = messages[adminUserId] || [];
  if (applicationStatus === "pending" || applicationStatus === "rejected")
    return (
      <p className="text-center text-[#007BFF] text-2xl p-4 capitalize font-bold ">
        basvuru onayladiktan sonra chat sayfasi acilir
      </p>
    );
  else
    return (
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg flex flex-col h-[600px] border border-[#007BFF]">
        <div className="bg-[#007BFF] text-white text-center py-3 font-semibold rounded-t-lg">
          Anaokulu ile Mesajlaşma (Veli)
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {currentMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.senderId === userId ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[75%] text-sm ${
                  msg.senderId === userId
                    ? "bg-[#007BFF] text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {msg.message}
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
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!userId}
            className={`bg-[#007BFF] text-white px-4 py-2 rounded hover:bg-blue-600 text-sm ${
              !userId ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Gönder
          </button>
        </div>
      </div>
    );
}
