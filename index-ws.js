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

process.on('SIGINT',()=>{
  console.log("sigint")
  wss.clients.forEach(client  => {
    client.close();
  });
  server.close(()=>{
    shutdownDB()
  })
})
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
  db.run(`INSERT INTO visitors (count , time)
        values(${numClients} , datetime('now'))      
  `);

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

//end web socket

// database
const sqlite = require('sqlite3');


const db = new sqlite.Database(':memory:');
db.serialize(()=>{
  db.run(` CREATE TABLE visitors (
      count INTEGER,
      time TEXT
    )
  `);
});

function getCounts(){
  db.each("SELECT * FROM visitors",(err, row)=>{
    console.log(row)
  })
}
function shutdownDB(){
  console.log("Shutting down db")
  getCounts();
  db.close((err) => {
    if (err) {
      console.error('Error closing the database:', err.message);
    } else {
      console.log('Database closed.');
    }
  });
}