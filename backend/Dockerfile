# Stage 1: Build the TypeScript application
FROM node:latest AS builder

WORKDIR /backend

# Copy package.json and package-lock.json from backend folder to the container
COPY ./backend/package*.json ./

# Install project dependencies
RUN npm install

# Install nodemon, knex, typescript, and ts-node globally
RUN npm install -g nodemon knex typescript ts-node

# Copy the rest of the application code from backend folder to the container
COPY . .

# Copy tsconfig.json to the root directory
COPY ./backend/tsconfig.json ./tsconfig.json

# Build the TypeScript project
RUN npm run build

# Copy the migration script to the build directory
# COPY ./run_migrations.sh /backend/build/

# Copy the migration script to the build directory
COPY ./backend/scripts /backend/build/scripts

# # Manually copy the scripts folder to the build directory
# COPY ./backend/scripts /backend/build/scripts


# Make the script executable
RUN chmod +x /backend/build/scripts/run_migrations.sh

# Run the migration script
RUN /backend/build/scripts/run_migration.sh

# Stage 2: Create a lightweight container with only the necessary files and the built JavaScript files
FROM node:slim

WORKDIR /backend

# Copy only the necessary files from the builder stage
COPY --from=builder /backend/build /backend/build
COPY --from=builder /backend/package*.json /backend/tsconfig.json ./

# Install production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 8081

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -fs http://localhost:8081/health || exit 1

# Specify the command to run the application
CMD ["npx", "nodemon", "./build/src/serve.js"]
