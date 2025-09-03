#!/bin/bash

echo "🐳 Starting HW9 Docker Deployment..."

# Stop existing containers
echo "📦 Stopping existing containers..."
docker-compose down

# Remove old images (optional, for clean build)
echo "🧹 Cleaning up old images..."
docker system prune -f

# Build and start services
echo "🏗️ Building and starting services..."
docker-compose up --build -d

# Show status
echo "📊 Container status:"
docker-compose ps

# Show logs
echo "📝 Recent logs:"
docker-compose logs --tail=20

echo "✅ Deployment complete!"
echo "🌐 Frontend: http://localhost"
echo "🔗 Backend API: http://localhost:3001"
echo "📊 Check logs: docker-compose logs -f"
