import React, { useState, useRef, useEffect } from "react";
import "./CommunicatieStyle.css";


export default function ChatSquare() {
const [messages, setMessages] = useState([
{ id: 1, from: "bot", text: "Hi — I’m here for a quick chat!" },
{ id: 2, from: "user", text: "Hello!" },
]);
const [value, setValue] = useState("");
const listRef = useRef(null);


useEffect(() => {
if (listRef.current) {
listRef.current.scrollTop = listRef.current.scrollHeight;
}
}, [messages]);


function handleSend() {
const trimmed = value.trim();
if (!trimmed) return;
const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
const userMsg = { id: nextId, from: "user", text: trimmed };
setMessages((m) => [...m, userMsg]);
setValue("");


setTimeout(() => {
setMessages((m) => [
...m,
{ id: nextId + 1, from: "bot", text: `Nice — you said: "${trimmed}"` },
]);
}, 600);
}


function handleKeyDown(e) {
if (e.key === "Enter" && !e.shiftKey) {
e.preventDefault();
handleSend();
}
}


return (
<div className="chat-container">
<div className="chat-box">
<div className="chat-header">
<div className="chat-header-title">
<div className="status-dot" />
<span>Small Talk</span>
</div>
<button className="chat-minimize">—</button>
</div>


<div ref={listRef} className="chat-messages">
{messages.map((m) => (
<div
key={m.id}
className={`chat-message ${m.from === "user" ? "user" : "bot"}`}
>
{m.text}
</div>
))}
</div>


<div className="chat-input-area">
<textarea
value={value}
onChange={(e) => setValue(e.target.value)}
onKeyDown={handleKeyDown}
rows={1}
placeholder="Type a quick message..."
className="chat-input"
/>
<button onClick={handleSend} className="chat-send">Send</button>
</div>
</div>
</div>
);
}