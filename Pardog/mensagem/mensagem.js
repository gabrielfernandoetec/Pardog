document.addEventListener("DOMContentLoaded", function() {
    const sendMessageButton = document.getElementById("sendMessageButton");
    const messageInput = document.getElementById("messageInput");
    const conversation = document.querySelector(".conversation");

    sendMessageButton.addEventListener("click", function() {
        const messageText = messageInput.value;
        if (messageText.trim() !== "") {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "sent");
            messageDiv.innerHTML = `<p>${messageText}</p>`;
            conversation.appendChild(messageDiv);
            messageInput.value = "";
        }
    });

    // Adicione este trecho para enviar mensagens quando a tecla Enter é pressionada
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const messageText = messageInput.value;
            if (messageText.trim() !== "") {
                const messageDiv = document.createElement("div");
                messageDiv.classList.add("message", "sent");
                messageDiv.innerHTML = `<p>${messageText}</p>`;
                conversation.appendChild(messageDiv);
                messageInput.value = "";
            }
        }
    });
});
