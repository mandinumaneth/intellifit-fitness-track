# AI Service

This microservice provides AI-powered recommendations for fitness activities. It integrates with the Gemini API to analyze activities and generate suggestions, improvements, and safety guidelines.

## Features
- Receives activity data and generates recommendations
- Integrates with Gemini AI API
- Stores recommendations in MongoDB
- Exposes REST API endpoints

## Endpoints
- `GET /api/recommendations/user/{userId}` — Get recommendations for a user
- `GET /api/recommendations/activity/{activityId}` — Get recommendation for an activity
- `GET /api/recommendations/activity/{activityId}/full` — Get both activity details and recommendation

## How It Works
- Listens for activity events (via RabbitMQ)
- Calls Gemini API using configured URL and API key
- Returns recommendations to frontend and other services

## Setup
1. Ensure MongoDB and RabbitMQ are running
2. Set Gemini API URL and key in environment or `application.yml`
3. Start the service:
   ```
   ./mvnw spring-boot:run
   ```

## Configuration
- All configs are managed via configserver and local `application.yml`
- Gemini API credentials must be set

---
See the main project README for more details.

