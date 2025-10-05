"use client";
import { useState } from "react";
import ChatList from "./components/ChatList";
import ChatInput from "./components/ChatInput";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { role: "assistant", content: data.reply || "No reply" };
    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  }

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Chat with Mistral
      </h1>
      <ChatList messages={messages} loading={loading} />
      <ChatInput
        input={input}
        setInput={setInput}
        onSend={sendMessage}
        loading={loading}
      />
    </main>
  );
}