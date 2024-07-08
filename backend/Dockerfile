# Stage 1: Build the TypeScript application
FROM node:latest AS builder

WORKDIR /backend

# Copy package.json and package-lock.json from backend folder to the container
COPY backend/package*.json ./

# Install project dependencies
RUN npm install

# Install nodemon, knex, & typescript globally
RUN npm install -g nodemon knex typescript

# Copy the rest of the application code from backend folder to the container
COPY backend .

# Copy migration files might not be necessary
COPY backend/migrations /backend/migrations

# Run the migration command within the build directory
RUN npx knex migrate:latest --knexfile /backend/knexfile.ts --cwd /backend


# Build the TypeScript project
RUN npm run build

# Navigate to the build directory NEW STEP ADDED
WORKDIR /backend/build


# Stage 2: Create a lightweight container with only the necessary files and the built JavaScript files
FROM node:slim

WORKDIR /backend

# Copy only the necessary files from the builder stage
COPY --from=builder /backend/build /backend/build
COPY --from=builder /backend/package*.json /backend/tsconfig.json ./

# Install production dependencies
RUN npm install



# Expose the port the app runs on
EXPOSE 8081

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -fs http://localhost:8081/health || exit 1

ENTRYPOINT ["npx", "nodemon", "./build/src/serve.js"]



