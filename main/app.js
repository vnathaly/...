const socket = io();

//Elements That I need to the DOM
const message = document.getElementById('message');
const username = document.getElementById('usernamedata').value;
const btn = document.getElementById('button');
const viewMessage = document.getElementById('view');
const actions = document.getElementById('actions');

btn.addEventListener('click', () => {
  socket.emit('ElSeñorMensaje',{
    message: message.value
  })
});

socket.on('mensajeServidor', (data)=> {
  viewMessage.innerHTML += `<p><strong> ${data.username} </strong></p>: ${data.message}`
})

