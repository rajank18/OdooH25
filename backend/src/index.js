const app = require("./server.js"); // Import the app
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";


app.listen(PORT, HOST, () => {
    console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});
