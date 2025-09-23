#!/bin/bash

# Enable pnpm
corepack enable
corepack prepare pnpm@latest --activate

# Install dependencies
pnpm install --frozen-lockfile

# Set environment variables for build
export PAYLOAD_SECRET=${PAYLOAD_SECRET:-"build-time-secret-key-32-chars-long"}
export DATABASE_URI=DATABASE_URI
export NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL:-"http://localhost:3000"}
export EMAIL_FROM_ADDRESS=${EMAIL_FROM_ADDRESS:-"noreply@example.com"}
export RESEND_API_KEY=${RESEND_API_KEY:-""}

# Debug: Show what DATABASE_URI is being used
echo "Using DATABASE_URI: $DATABASE_URI"

# Generate types
pnpm generate:types

# Build the application
pnpm build
