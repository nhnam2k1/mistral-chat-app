import ChatMessage from "./ChatMessage";

export default function ChatList({ messages, loading }) {
  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "0.5rem",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      {messages.map((msg, i) => (
        <ChatMessage key={i} role={msg.role} content={msg.content} />
      ))}
      {loading && <p style={{ fontStyle: "italic" }}>Mistral is thinking...</p>}
    </div>
  );
}