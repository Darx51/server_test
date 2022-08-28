const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola soy un servidor de prueba corriendo en AWS');
});

server.listen(port, ()=>{
  console.log(`servidor corriendo en el puerto: ${port}`);
})