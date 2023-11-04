const express = require('express');
const server = require('http').createServer();
const app = express();
const port = 3000;

// Define a route that responds with "Hello, Express!" when accessed
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname });

});

server.on('request',app);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//websocket servr
const WebSocket = require('ws');

// Create a WebSocket server by passing the HTTP server instance
const wss = new WebSocket.Server({ server });

// Listen for WebSocket connections
wss.on('connection', (ws) => {
    const numClients = wss.clients.size;
  console.log(`Clients connected ${numClients}`);
    wss.broadcast(`current visitors ${numClients}`);
  // Send a welcome message to the connected client
  ws.send('Welcome to the WebSocket server!');
    if (ws.readyState ===ws.OPEN){
        ws.send('welcome to my server');
    }

  // Listen for client disconnection
  ws.on('close', () => {
    wss.broadcast(`current visitors ${numClients}`);
    console.log('Client disconnected');
  });
});

wss.broadcast = function broadcast(data){
    wss.clients.forEach(client  => {
        client.send(data);
    });
}