"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./routes/users"));
const database_1 = require("./services/database");
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middleware
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // Vue dev server
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use('/api', users_1.default);
// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'HW9 Backend Server is running!',
        timestamp: new Date().toISOString()
    });
});
// Start server
async function startServer() {
    try {
        // Initialize database
        await database_1.databaseService.initializeDatabase();
        // Start listening
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
            console.log(`📊 Health check: http://localhost:${PORT}/health`);
            console.log(`👥 Users API: http://localhost:${PORT}/api/users`);
        });
    }
    catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
}
// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down server...');
    await database_1.databaseService.disconnect();
    process.exit(0);
});
process.on('SIGTERM', async () => {
    console.log('\n🛑 Shutting down server...');
    await database_1.databaseService.disconnect();
    process.exit(0);
});
startServer();
//# sourceMappingURL=server.js.map