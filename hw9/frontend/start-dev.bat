@echo off
echo 🚀 Starting HW9 Full Stack Application...

REM Start Backend
echo 📦 Installing backend dependencies...
cd backend
call npm install

echo 🔧 Starting backend server...
start "Backend Server" cmd /k "npm run dev"

REM Wait a bit for backend to start
timeout /t 3 /nobreak >nul

REM Start Frontend
echo 🎨 Starting frontend...
cd ..
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ✅ Both servers are starting:
echo    📱 Frontend: http://localhost:5173
echo    🔌 Backend:  http://localhost:3001
echo    🩺 Health:   http://localhost:3001/health
echo.
echo Press any key to exit...
pause >nul
