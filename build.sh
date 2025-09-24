#!/bin/bash

echo "=== BUILD.SH STARTED ==="
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Debug: Show environment variables from DigitalOcean
echo "=== ENVIRONMENT VARIABLES DEBUG ==="
echo "NODE_ENV: $NODE_ENV"
echo "PAYLOAD_SECRET is set: ${PAYLOAD_SECRET:+YES}"
echo "DATABASE_URI is set: ${DATABASE_URI:+YES}"
echo "MONGODB_URI is set: ${MONGODB_URI:+YES}"
echo "NEXT_PUBLIC_SERVER_URL: $NEXT_PUBLIC_SERVER_URL"
echo "=================================="

# Enable pnpm
echo "Installing corepack..."
npm i corepack
corepack enable

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Set build-time environment variables
echo "Setting build-time environment variables..."
export PAYLOAD_SECRET=${PAYLOAD_SECRET:-"build-time-secret-key-32-chars-long"}
export DATABASE_URI=${DATABASE_URI:-"MISSING_DB_URI_BUILD"}
export NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL:-"http://localhost:3000"}

echo "=== FINAL ENVIRONMENT VARIABLES ==="
echo "PAYLOAD_SECRET: ${PAYLOAD_SECRET:0:20}..."
echo "DATABASE_URI: $DATABASE_URI"
echo "NEXT_PUBLIC_SERVER_URL: $NEXT_PUBLIC_SERVER_URL"
echo "=================================="

# Build the application
echo "Starting build process..."
pnpm build

echo "=== BUILD.SH COMPLETED ==="
