#!/bin/bash

# Enable pnpm
corepack enable
corepack prepare pnpm@latest --activate

# Install dependencies
pnpm install --frozen-lockfile

# Generate types
pnpm generate:types

# Build with environment variables
export PAYLOAD_SECRET=${PAYLOAD_SECRET:-"fallback-secret-for-build"}
export DATABASE_URI=${DATABASE_URI:-"mongodb://localhost:27017/payblocks"}
export NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL:-"http://localhost:3000"}

# Build the application
pnpm build
