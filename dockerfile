# Use lightweight Node.js
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files first (better for caching)
COPY package*.json ./

# Install dependencies (production only, faster)
RUN npm ci --only=production

# Copy the rest of your app code
COPY . .

# Expose the port your app listens on (3443 for HTTPS)
EXPOSE 3443

# Start the app
CMD ["node", "src/server.js"]
