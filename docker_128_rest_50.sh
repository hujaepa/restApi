#!/usr/bin/env bash
set -euo pipefail

# Output file
OUTPUT="docker_128_rest_50.csv"

# Duration: 30 minutes + 10 seconds
DURATION_SECONDS=$((30 * 60 + 10))

# Sampling interval (seconds)
INTERVAL_SECONDS=5

# Target container
CONTAINER="restapi-app2-1"

# Docker stats format (no NetIO)
FORMAT='{{.Name}},{{.CPUPerc}},{{.MemUsage}}'

# Clear output file
: > "$OUTPUT"

SECONDS_ELAPSED=0

while [ "$SECONDS_ELAPSED" -lt "$DURATION_SECONDS" ]; do
  docker stats "$CONTAINER" --no-stream --format "$FORMAT" >> "$OUTPUT"
  sleep "$INTERVAL_SECONDS"
  SECONDS_ELAPSED=$((SECONDS_ELAPSED + INTERVAL_SECONDS))
done
