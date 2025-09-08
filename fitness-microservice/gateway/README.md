# Gateway Service

This microservice acts as the API gateway for the Intellifit Fitness Track platform. It routes requests from the frontend to the appropriate backend microservices and handles authentication and authorization using Keycloak.

## Features
- Centralized routing for all backend services
- Authentication and authorization with Keycloak OAuth2
- Load balancing and security
- Service discovery via Eureka

## Endpoints
- All frontend requests go through the gateway at `http://localhost:8080/api/...`
- Routes requests to:
  - `/api/users` → userservice
  - `/api/activities` → activityservice
  - `/api/recommendations` → aiservice

## How It Works
- Validates JWT tokens from Keycloak
- Forwards requests to the correct microservice
- Handles CORS, security, and error handling

## Setup
1. Ensure Eureka, Keycloak, and all backend services are running
2. Configure routing and security in `src/main/resources/application.yml`
3. Start the service:
   ```
   ./mvnw spring-boot:run
   ```

## Configuration
- All configs are managed via configserver and local `application.yml`
- Keycloak integration must be configured

---
See the main project README for more details.

