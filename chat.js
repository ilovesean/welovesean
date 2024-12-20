const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

function sendMessage() {
    const message = chatInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
