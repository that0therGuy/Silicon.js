const WebSocket = require("ws");

const PORT = process.env.PORT || 10000; // Render assigns a port dynamically
const wss = new WebSocket.Server({ port: PORT }, () => {
    console.log(`WebSocket server running on port ${PORT}`);
});

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        try {
            const data = JSON.parse(message);
            wss.clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(data));
                }
            });
        } catch (error) {
            console.error("Invalid JSON received:", message);
        }
    });
});
