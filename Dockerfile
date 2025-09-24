FROM node:20.9-alpine as base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base as builder

WORKDIR /home/node/app

# Accept build arguments
ARG PAYLOAD_SECRET
ARG DATABASE_URI
ARG MONGODB_URI
ARG NEXT_PUBLIC_SERVER_URL

# Set environment variables from build arguments
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV DATABASE_URI=$DATABASE_URI
ENV MONGODB_URI=$MONGODB_URI
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Debug environment variables
RUN echo "=== Docker Build Environment Debug ===" && \
    echo "NODE_ENV: $NODE_ENV" && \
    echo "PAYLOAD_SECRET is set: ${PAYLOAD_SECRET:+YES}" && \
    echo "DATABASE_URI: $DATABASE_URI" && \
    echo "MONGODB_URI: $MONGODB_URI" && \
    echo "NEXT_PUBLIC_SERVER_URL: $NEXT_PUBLIC_SERVER_URL" && \
    echo "======================================"

# Generate types (now that we have real environment variables)
RUN echo "Generating types with real environment variables..."
RUN pnpm generate:types

# Build the application
RUN pnpm build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node/app

# Runtime environment variables (DigitalOcean will inject real values)
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}
ENV DATABASE_URI=${DATABASE_URI}
ENV MONGODB_URI=${MONGODB_URI}
ENV NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL}

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including devDependencies for next.config.ts)
RUN pnpm install --frozen-lockfile

# Copy built application
COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/public ./public
COPY --from=builder /home/node/app/src ./src
COPY --from=builder /home/node/app/next.config.ts ./
COPY --from=builder /home/node/app/tsconfig.json ./

# Debug runtime environment variables
RUN echo "=== Runtime Environment Variables Debug ===" && \
    echo "NODE_ENV: $NODE_ENV" && \
    echo "PAYLOAD_SECRET is set: ${PAYLOAD_SECRET:+YES}" && \
    echo "DATABASE_URI: $DATABASE_URI" && \
    echo "MONGODB_URI: $MONGODB_URI" && \
    echo "NEXT_PUBLIC_SERVER_URL: $NEXT_PUBLIC_SERVER_URL" && \
    echo "============================================="

EXPOSE 3000

CMD ["pnpm", "start"]
