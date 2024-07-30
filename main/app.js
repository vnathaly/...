const socket = io();

//Elements That I need to the DOM
const message = document.getElementById('message');
const username = document.getElementById('username');
const btn = document.getElementById('send');
const viewMessage = document.getElementById('view');
const actions = document.getElementById('actions');

btn.addEventListener('click', () => {
  socket.emit('ElSeñorMensaje',{
    username: username.value,
    message: message.value
  })
});

socket.on('mensajeServidor', (data)=> {
  viewMessage.innerHTML += `<p><strong> ${data.username} </strong></p>: ${data.message}`
})

