#!/bin/bash

# Enable pnpm
corepack enable
corepack prepare pnpm@latest --activate

# Install dependencies
pnpm install --frozen-lockfile

# Set environment variables for build (completely skip database)
export PAYLOAD_SECRET=${PAYLOAD_SECRET:-"build-time-secret-key-32-chars-long"}
export NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL:-"http://localhost:3000"}
export EMAIL_FROM_ADDRESS=${EMAIL_FROM_ADDRESS:-"noreply@example.com"}
export RESEND_API_KEY=${RESEND_API_KEY:-""}

# Completely skip database connection during build
export NODE_ENV=production
export SKIP_DATABASE_CONNECTION=true

# Debug: Show environment variables
echo "PAYLOAD_SECRET is set: ${PAYLOAD_SECRET:+YES}"
echo "NEXT_PUBLIC_SERVER_URL: $NEXT_PUBLIC_SERVER_URL"
echo "SKIP_DATABASE_CONNECTION: $SKIP_DATABASE_CONNECTION"

# Skip type generation (requires database connection)
echo "Skipping type generation (requires database connection)..."

# Build the application
echo "Building application..."
pnpm build
