const socket = io();

//Elements That I need to the DOM
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let viewMessage = document.getElementById('view');
let actions = document.getElementById('actions');

btn.addEventListener('click', () =>{
  socket.emit('ElSeñorMensaje',{
    username: username.value,
    message: message.value
  })
});

socket.on('mensajeServidor', (data)=>{
  let mensajeFinal = viewMessage.innerHTML += `<p><strong> ${data.username} </strong></p> ${data.message}`
})

