# Use the official Node.js image as the base image
FROM node:18.17.1

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Express app is listening on
EXPOSE 3500

# Start your Express app
CMD ["npm", "start"]
