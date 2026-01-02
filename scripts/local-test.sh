#!/usr/bin/env bash
set -e

# Installs, builds, and runs the Next.js dev server for local testing
npm ci
npm run build
npm start
