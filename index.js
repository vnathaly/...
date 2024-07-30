// async function probandoJson() {
//   const response = await fetch("http://127.0.0.1:5500/package.json");
//   const json = await response.json();
//   console.log(json);
// }

// probandoJson();

// console.log("Hello Word 2")

//-----Requeridos-----
const express = require('express');
const SocketIO = require('socket.io');
const path = require('path');
const app = express();
const admRouter = express.Router();
require('dotenv').config()

//Settings
 
app.set('port', process.env.PORT);


//Frontend

app.use(express.static(path.join(__dirname, "main")));

//Server
const server = app.listen(app.get('port'), ()=>{
  console.log('Server on Port', app.get('port'));
});

//Now with socket
const io = SocketIO(server);

io.on('connection', (socket)=> {
  console.log('New connection', socket.id);
  socket.on('ElSeñorMensaje', (data)=>{
    io.sockets.emit('mensajeServidor', data);
  });
});

admRouter.get('/new.html', ()=>{
  console.log("New User")
});
