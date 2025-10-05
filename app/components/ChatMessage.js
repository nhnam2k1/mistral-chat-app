export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "0.5rem",
      }}
    >
      <div
        style={{
          background: isUser ? "#3b82f6" : "#e5e7eb",
          color: isUser ? "white" : "black",
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
          maxWidth: "75%",
        }}
      >
        {content}
      </div>
    </div>
  );
}