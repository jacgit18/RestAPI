#!/bin/bash

# Navigate to the build directory
cd /backend/build

# Run Knex migrations
npx knex migrate:latest --knexfile knexfile.js
