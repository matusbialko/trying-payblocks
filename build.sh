#!/bin/bash

# Enable pnpm
npm i corepack
corepack enable

# Install dependencies
pnpm install

# Build the application
pnpm build
