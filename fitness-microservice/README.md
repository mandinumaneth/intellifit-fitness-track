# Intellifit Fitness Track

Intellifit Fitness Track is a full-stack microservices-based fitness tracking platform. It helps users log activities, receive AI-powered recommendations, and manage their fitness journey with a modern web interface. The project is built with Spring Boot (Java) for the backend and React for the frontend, following best practices for scalability and maintainability.

## Features
- **User Management:** Register, login, and manage user profiles.
- **Activity Tracking:** Log fitness activities (type, duration, calories burned, etc.).
- **AI Recommendations:** Get personalized suggestions and improvements for each activity using AI (Gemini).
- **Microservices Architecture:** Each core feature is a separate service for modularity and scalability.
- **API Gateway:** Centralized routing and security for all backend services.
- **Service Discovery:** Eureka for dynamic service registration and discovery.
- **Config Server:** Centralized configuration management for all services.
- **Frontend:** Modern React SPA for user interaction.
- **Authentication & Authorization:** Integrated with Keycloak OAuth2 for secure user authentication and role-based access control.
- **Messaging:** RabbitMQ for asynchronous communication between services.

## Project Structure
```
fitness-microservice/
├── activityservice/      # Manages fitness activities
├── aiservice/            # AI-powered recommendations
├── configserver/         # Centralized config management
├── eureka/               # Service discovery
├── gateway/              # API gateway
├── userservice/          # User management
├── fitness-app-frontend/ # React frontend
```

## Backend (Spring Boot Microservices)
- **activityservice:** CRUD operations for fitness activities.
- **aiservice:** Integrates with AI (e.g., Gemini) to generate recommendations and improvements.
- **userservice:** Handles user registration, authentication, and profile management.
- **gateway:** API gateway for routing, security, and load balancing.
- **eureka:** Service registry for microservices.
- **configserver:** Centralized configuration for all services.
- **Keycloak:** Provides OAuth2/OpenID Connect authentication and authorization for all backend services.
- **RabbitMQ:** Used for messaging between microservices. Start with:
  ```
  docker run -it --rm --name rabbitmqFitness -p 5672:5672 -p 15672:15672 rabbitmq:4-management
  ```
- **Gemini AI Integration:** The aiservice uses Gemini API for generating recommendations. Configure with:
  - `GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=`
  - `GEMINI_API_KEY=AIzaSyCFJep5G6CEkh7OUKxiGpBu3BTsfjixLAQ`
  Set these as environment variables or in your config server/application.yml.

### Technologies
- Java 21
- Spring Boot 3.x
- Spring Cloud (Eureka, Gateway, Config Server)
- MongoDB (for activity and recommendation data)
- Keycloak (for authentication)
- REST APIs

## Frontend (React)
- **fitness-app-frontend:**
  - Built with React and Vite
  - Modern UI for logging activities, viewing recommendations, and managing profiles
  - Axios for API calls
  - Material UI for components
  - Keycloak JS adapter for authentication

### Key Components
- **ActivityList:** View all logged activities
- **ActivityForm:** Add new activities
- **ActivityDetail:** View details and AI recommendations for an activity
- **Auth:** Login/logout and secure access using Keycloak

## Authentication & Authorization (Keycloak OAuth2)
- Keycloak is used for user authentication and role-based access control across all services.
- Backend services validate JWT tokens issued by Keycloak using OAuth2.
- Frontend uses Keycloak JS adapter for login/logout and token management.
- Roles and permissions can be managed via the Keycloak admin console.
- Start Keycloak with:
  ```
  docker run -p 127.0.0.1:8181:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.3.3 start-dev
  ```
- Configure Keycloak realm, client, and roles for your environment.

## Routing & Endpoints
All requests from the frontend go through the API Gateway, which routes them to the appropriate microservice. The gateway also handles authentication and authorization using Keycloak tokens.

### Main Endpoints (via Gateway)
- **User Service:** `/api/users`
  - `POST /api/users/register` — Register a new user
  - `POST /api/users/login` — Login and get JWT
  - `GET /api/users/profile` — Get user profile
- **Activity Service:** `/api/activities`
  - `GET /api/activities` — List all activities
  - `POST /api/activities` — Add a new activity
  - `GET /api/activities/{id}` — Get activity details
- **AI Service:** `/api/recommendations`
  - `GET /api/recommendations/user/{userId}` — Get recommendations for a user
  - `GET /api/recommendations/activity/{activityId}` — Get recommendation for an activity
  - `GET /api/recommendations/activity/{activityId}/full` — Get both activity details and recommendation

### How Routing Works
- The frontend makes requests to the gateway (http://localhost:8080/api/...).
- The gateway checks the JWT token (from Keycloak) for authentication and authorization.
- The gateway forwards the request to the correct microservice (activityservice, aiservice, userservice) based on the path.
- Each microservice validates the token and processes the request.
- The response is sent back to the frontend via the gateway.

## Getting Started

### Prerequisites
- Java 21+
- Node.js 18+
- MongoDB
- Keycloak (standalone server)
- RabbitMQ (optional, for messaging)

### Backend Setup
1. Start MongoDB.
2. Start Eureka service registry (`eureka/`).
3. Start Config Server (`configserver/`).
4. Start API Gateway (`gateway/`).
5. Start Keycloak server and configure realms/clients/users.
6. Start RabbitMQ (optional) for messaging.
7. Start microservices (`activityservice/`, `aiservice/`, `userservice/`).

Each service can be started using:
```
./mvnw spring-boot:run
```

### Frontend Setup
1. Navigate to `fitness-app-frontend/`.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Configure Keycloak JS adapter in `authConfig.js` with your Keycloak server details.

## Configuration
- All service configurations are managed via `configserver` and local `application.yml` files.
- Environment variables (e.g., AI API keys, Keycloak URLs, RabbitMQ host/port) should be set in the config server or as system properties.
- Keycloak configuration (realm, client, roles) should be managed via the Keycloak admin console.
- Gemini API keys and URLs should be set for aiservice.


---
For more details, see individual service README files or documentation in each folder.
