#!/bin/bash

if [ "$EUID" -ne 0 ]; then
    echo "Error. You must use sudo"
    exit 1
fi

if ! command -v docker &>/dev/null; then
    echo "Error. Docker is not installed"

    read -p "Do you want to install docker? (y/N): " answer
    answer=${answer:-n}
    case "$answer" in
    y | Y)
        echo "Continue run script..."
        bash <(curl -sSL https://get.docker.com)
        ;;
    N | N)
        echo "Exit."
        exit 0
        ;;
    *)
        echo "Incorrect input. Exit from the script."
        exit 1
        ;;
    esac

fi

# Check if jq is installed
if ! command -v jq &>/dev/null; then
    echo "Error. jq is not installed. Please install jq to proceed (e.g., sudo apt install jq)."
    exit 1
fi

# Check build folder
if [ ! -d "build" ] || [ -z "$(ls -A build)" ]; then
    echo "The build folder is empty"
    exit 1
fi

# Extract version from package.json
VERSION=$(jq -r .version package.json)
if [ -z "$VERSION" ]; then
    echo "Error. Could not extract version from package.json"
    exit 1
fi
PACKAGE_NAME=$(jq -r .name package.json)
if [ -z "$PACKAGE_NAME" ]; then
    echo "Error. Could not extract version from package.json"
    exit 1
fi

# Set app name for build.yaml

if [ "$1" == "dev" ]; then
    DOCKER_NAME=${DOCKERHUB_USERNAME}/"${PACKAGE_NAME}-dev"
elif [ "$1" == "prod" ]; then
    DOCKER_NAME=${DOCKERHUB_USERNAME}/$PACKAGE_NAME
elif [ "$1" == "local" ]; then
    DOCKER_NAME="${PACKAGE_NAME}-dev"
else
    DOCKER_NAME=$PACKAGE_NAME
fi

echo "Docker name: ${DOCKER_NAME}"

# Set environment variables
export VERSION=$VERSION
export DOCKER_NAME=$DOCKER_NAME

# export DOCKERHUB_USERNAME=$DOCKERHUB_USERNAME

echo "Starting build for version $VERSION..."

docker stop $PACKAGE_NAME

docker compose -f docker-compose-build.yaml down

docker system prune -a -f

docker compose -f docker-compose-build.yaml build --no-cache

# docker compose up -d
docker compose -f docker-compose-build.yaml up -d --force-recreate
# docker compose -f docker-compose-bot.yaml up -d  --force-recreate
