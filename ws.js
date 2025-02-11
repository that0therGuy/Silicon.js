const WebSocket = require("ws");

const wss = new WebSocket.Server({ host: "0.0.0.0", port: 8080 });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        try {
            const data = JSON.parse(message); // Ensure it's valid JSON
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

console.log("WebSocket server running on ws://your-public-ip:8080");
