export default function ChatInput({ input, setInput, onSend, loading }) {
  return (
    <form onSubmit={onSend} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{
          flex: 1,
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
          border: "1px solid #d1d5db",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          background: "#3b82f6",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </form>
  );
}