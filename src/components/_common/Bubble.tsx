const Bubble =({ from, text }: { from: "user" | "ai"; text: string })=> {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2 text-sm ${
          isUser
            ? "bg-gradient-to-r from-purple-600/40 to-blue-600/40 border border-white/10"
            : "bg-white/5 border border-white/10"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
export default Bubble;