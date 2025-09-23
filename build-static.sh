#!/bin/bash

# Enable pnpm
corepack enable
corepack prepare pnpm@latest --activate

# Install dependencies
pnpm install --frozen-lockfile

# Set environment variables for build (without database connection)
export PAYLOAD_SECRET=${PAYLOAD_SECRET:-"build-time-secret-key-32-chars-long"}
export NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL:-"http://localhost:3000"}
export EMAIL_FROM_ADDRESS=${EMAIL_FROM_ADDRESS:-"noreply@example.com"}
export RESEND_API_KEY=${RESEND_API_KEY:-""}

# Skip database connection during build
export NODE_ENV=production

# Debug: Show environment variables
echo "PAYLOAD_SECRET is set: ${PAYLOAD_SECRET:+YES}"
echo "NEXT_PUBLIC_SERVER_URL: $NEXT_PUBLIC_SERVER_URL"

# Generate types (skip if database is not available)
echo "Generating types..."
pnpm generate:types || echo "Type generation failed, continuing with build..."

# Build the application
echo "Building application..."
pnpm build
