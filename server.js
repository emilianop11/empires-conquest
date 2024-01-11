const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('New client connected');

  ws.on('message', data => {
    console.log('Received message: ', data);

    // Broadcast the message to all connected clients
    wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            console.log(data.toString())
            client.send(data.toString()); // Explicitly convert to string if needed
        }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server started on ws://localhost:8080');
