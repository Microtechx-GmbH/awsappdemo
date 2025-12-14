# Use official Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first (layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code (node_modules excluded via .dockerignore)
COPY . .

# Backend port
EXPOSE 5000

# Start server
CMD ["node", "index.js"]
