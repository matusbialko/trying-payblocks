FROM node:20.9-alpine as base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base as builder

WORKDIR /home/node/app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Set build-time environment variables (use DigitalOcean env vars if available)
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET:-build-time-secret-key-32-chars-long}
ENV DATABASE_URI=${DATABASE_URI:-mongodb://127.0.0.1:27017/payload-template-website}
ENV MONGODB_URI=${MONGODB_URI:-mongodb://127.0.0.1:27017/payload-template-website}
ENV NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL:-http://localhost:3000}

# Debug environment variables
RUN echo "=== Docker Build Environment Debug ==="
RUN echo "NODE_ENV: $NODE_ENV"
RUN echo "PAYLOAD_SECRET is set: ${PAYLOAD_SECRET:+YES}"
RUN echo "DATABASE_URI: $DATABASE_URI"
RUN echo "MONGODB_URI: $MONGODB_URI"
RUN echo "NEXT_PUBLIC_SERVER_URL: $NEXT_PUBLIC_SERVER_URL"
RUN echo "======================================"

# Generate types (now that we have real environment variables)
RUN echo "Generating types with real environment variables..."
RUN pnpm generate:types

# Build the application
RUN pnpm build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node/app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

# Copy built application
COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/public ./public
COPY --from=builder /home/node/app/src ./src
COPY --from=builder /home/node/app/next.config.ts ./
COPY --from=builder /home/node/app/tsconfig.json ./

EXPOSE 3000

CMD ["pnpm", "start"]
