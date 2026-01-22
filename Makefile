.PHONY: dev frontend backend build run rebuild clean

# Start both frontend and backend for development
dev:
	@echo "Starting backend and frontend..."
	@make -j2 backend frontend

# Start frontend only
frontend:
	cd frontend && bun install && bun run dev

# Start backend only
backend:
	cd backend && uv pip install --system -r pyproject.toml && uvicorn main:app --reload --port 8001

# Build podman image
build:
	podman build -t myapp .

# Run podman container
run:
	podman run --rm -p 8000:8000 myapp

# Rebuild and run podman container
rebuild: build run

# Clean up
clean:
	podman rmi myapp 2>/dev/null || true
	rm -rf frontend/node_modules frontend/dist