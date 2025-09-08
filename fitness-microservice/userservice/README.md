# User Service

This microservice handles user registration, authentication, and profile management. It integrates with Keycloak for secure authentication and exposes REST endpoints for user operations.

## Features
- Register new users
- Authenticate users via Keycloak OAuth2
- Manage user profiles
- Exposes REST API endpoints

## Endpoints
- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login and get JWT
- `GET /api/users/profile` — Get user profile

## How It Works
- Receives requests via API Gateway
- Uses Keycloak for authentication and role management
- Persists user data in MongoDB

## Setup
1. Ensure MongoDB and Keycloak are running
2. Configure connection in `src/main/resources/application.yml`
3. Start the service:
   ```
   ./mvnw spring-boot:run
   ```

## Configuration
- All configs are managed via configserver and local `application.yml`
- Keycloak realm, client, and roles must be configured

---
See the main project README for more details.

