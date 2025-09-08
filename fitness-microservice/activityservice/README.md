# Activity Service

This microservice manages all fitness activities for users. It provides CRUD operations for activities and exposes REST endpoints for integration with other services.

## Features
- Create, read, update, delete activities
- Stores type, duration, calories burned, and other metrics
- Integrates with MongoDB
- Exposes REST API endpoints

## Endpoints
- `GET /api/activities` — List all activities
- `POST /api/activities` — Add a new activity
- `GET /api/activities/{id}` — Get activity details

## How It Works
- Receives requests via API Gateway
- Persists activity data in MongoDB
- Sends activity data to other services (e.g., aiservice) via messaging (RabbitMQ)

## Setup
1. Ensure MongoDB and RabbitMQ are running
2. Configure connection in `src/main/resources/application.yml`
3. Start the service:
   ```
   ./mvnw spring-boot:run
   ```

## Configuration
- All configs are managed via configserver and local `application.yml`

---
See the main project README for more details.
