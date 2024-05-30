document.getElementById('send-button').addEventListener('click', function() {
    var input = document.getElementById('message-input');
    var message = input.value.trim();

    if (message) {
        var messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = message;

        document.getElementById('chat-messages').appendChild(messageElement);
        input.value = '';
    }
});
