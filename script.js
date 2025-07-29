async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value;
    chatBox.innerHTML += "<div><b>You:</b> " + message + "</div>";
    input.value = "";

    const res = await fetch("http://localhost:3000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: message })
    });
    const data = await res.json();
    chatBox.innerHTML += "<div><b>Bot:</b> " + data.answer + "</div>";
    chatBox.scrollTop = chatBox.scrollHeight;
}
