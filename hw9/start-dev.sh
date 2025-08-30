#!/bin/bash

echo "🚀 Starting HW9 Full Stack Application..."

# Function to kill processes on exit
cleanup() {
    echo "\n🛑 Shutting down..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

# Set up trap to call cleanup function on script exit
trap cleanup INT TERM

# Start Backend
echo "📦 Installing backend dependencies..."
cd backend
npm install

echo "🔧 Starting backend server..."
npm run dev &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

# Start Frontend
echo "🎨 Starting frontend..."
cd ../
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are running:"
echo "   📱 Frontend: http://localhost:5173"
echo "   🔌 Backend:  http://localhost:3001"
echo "   🩺 Health:   http://localhost:3001/health"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
