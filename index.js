document.addEventListener('DOMContentLoaded', function() {
  const messageFormBlue = document.getElementById('message-form-blue');
  const messageInputBlue = document.getElementById('message-input-blue');
  const messageFormRed = document.getElementById('message-form-red');
  const messageInputRed = document.getElementById('message-input-red');
  const messagesContainer = document.getElementById('messages-container');

  messageFormBlue.addEventListener('submit', function(event) {
    event.preventDefault();

    const text = messageInputBlue.value.trim();

    if (text !== "") {
      appendMessage(text, 'blue');
      messageInputBlue.value = "";
      messageFormBlue.querySelector('button').disabled = false; 
    }
  });

  messageFormRed.addEventListener('submit', function(event) {
    event.preventDefault();
    const text = messageInputRed.value.trim();
  }

    if (text !== "") {
      appendMessage(text, 'red');
      messageInputRed.value = "";
      messageFormRed.querySelector('button').disabled = false; 
  });

 
  messageFormBlue.querySelector('button').disabled = false;
  messageFormRed.querySelector('button').disabled = false;

  function appendMessage(text, userColor) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    p.className = userColor === 'blue' ? 'message-blue' : 'message-red'; 
    li.appendChild(p);
    messagesContainer.appendChild(li);
  }
});

