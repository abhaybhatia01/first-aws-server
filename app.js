// const http = require('http');
// const fs = require('fs'); // Require the 'fs' module to read files.

// http.createServer(function (req, res) {
//     // Check if the request is for the root path ('/') or 'index.html'.
//     if (req.url === '/' || req.url === '/index.html') {
//         // Read the 'index.html' file from the filesystem.
//         fs.readFile('index.html', 'utf8', function (err, data) {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Error: Could not read the HTML file');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     } else {
//         // For any other request, respond with a plain text message.
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end("on the way to full snack");
//     }
// }).listen(3000);

// console.log('Server started on port 3000');


const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle other routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/404.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
