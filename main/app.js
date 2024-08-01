const socket = io();

//Elements That I need to the DOM
const message = document.getElementById('message');
const username = document.getElementById('usernamedata');
const btn = document.getElementById('button');
const viewMessage = document.getElementById('view');
const actions = document.getElementById('actions');

btn.addEventListener('click', () => {
  socket.emit('ElSeñorMensaje',{
    username: usernamedata.value,
    message: message.value
  })
});

socket.on('mensajeServidor', (data)=> {
  viewMessage.innerHTML += `<p><strong> ${data.usernamedata} </strong></p>: ${data.message}`
})

