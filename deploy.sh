set -u
: "$CONTAINER_REGISTRY"
: "$VERSION"

envsubst < ./deploy.yml | kubectl apply -f - 