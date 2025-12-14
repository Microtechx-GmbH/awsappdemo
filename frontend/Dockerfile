# ---------- Build Stage ----------
FROM node:18-alpine AS build

# Install bash and necessary dependencies
RUN apk add --no-cache bash git

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Ensure ESM support by setting NODE_OPTIONS
ENV NODE_OPTIONS=--experimental-specifier-resolution=node

# Build frontend
RUN npm run build

# ---------- Runtime Stage ----------
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
