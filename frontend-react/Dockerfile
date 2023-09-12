# Use Node.js 18.17.1 LTS as the base image
FROM node:18.17.1

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port your React app will run 
EXPOSE 3000

# Start your React app
CMD ["npm", "start"]