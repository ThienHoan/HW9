#!/bin/bash

# Configuration
DOCKER_USERNAME="your-dockerhub-username"  # Thay bằng username Docker Hub của bạn
IMAGE_TAG="latest"

echo "🐳 Building and pushing HW9 Docker images..."

# Login to Docker Hub (chỉ cần 1 lần)
echo "🔐 Logging in to Docker Hub..."
echo "Please login to Docker Hub:"
docker login

# Build Backend Image
echo "🏗️ Building Backend image..."
cd backend
docker build -t $DOCKER_USERNAME/hw9-backend:$IMAGE_TAG .
if [ $? -eq 0 ]; then
    echo "✅ Backend build successful"
else
    echo "❌ Backend build failed"
    exit 1
fi

# Build Frontend Image  
echo "🏗️ Building Frontend image..."
cd ../frontend
docker build -t $DOCKER_USERNAME/hw9-frontend:$IMAGE_TAG .
if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    exit 1
fi

cd ..

# Push images to Docker Hub
echo "📤 Pushing Backend image to Docker Hub..."
docker push $DOCKER_USERNAME/hw9-backend:$IMAGE_TAG

echo "📤 Pushing Frontend image to Docker Hub..."
docker push $DOCKER_USERNAME/hw9-frontend:$IMAGE_TAG

# Show image info
echo "📊 Local images:"
docker images | grep hw9

echo "✅ Build and push completed!"
echo "🔗 Images available at:"
echo "   - docker.io/$DOCKER_USERNAME/hw9-backend:$IMAGE_TAG"
echo "   - docker.io/$DOCKER_USERNAME/hw9-frontend:$IMAGE_TAG"
echo ""
echo "📋 Next steps:"
echo "1. Copy docker-compose.yml and .env to your server"
echo "2. Update docker-compose.yml with your Docker Hub username"
echo "3. Run: docker-compose pull && docker-compose up -d"
