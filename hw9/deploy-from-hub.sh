#!/bin/bash

echo "🚀 Deploying HW9 from Docker Hub..."

# Pull latest images
echo "📥 Pulling latest images from Docker Hub..."
docker-compose pull

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Start services with latest images
echo "▶️ Starting services..."
docker-compose up -d

# Wait a bit for services to start
echo "⏳ Waiting for services to start..."
sleep 10

# Check service health
echo "🏥 Checking service health..."
docker-compose ps

# Show logs
echo "📝 Recent logs:"
docker-compose logs --tail=10

# Test endpoints
echo "🧪 Testing endpoints..."
echo "Testing backend health..."
curl -f http://localhost:3001/health && echo " ✅ Backend OK" || echo " ❌ Backend Failed"

echo "Testing frontend..."
curl -f http://localhost/health && echo " ✅ Frontend OK" || echo " ❌ Frontend Failed"

echo ""
echo "✅ Deployment complete!"
echo "🌐 Frontend: http://$(hostname -I | awk '{print $1}')"
echo "🔗 Backend API: http://$(hostname -I | awk '{print $1}'):3001"
echo ""
echo "📊 Monitor with:"
echo "  docker-compose logs -f"
echo "  docker-compose ps"
