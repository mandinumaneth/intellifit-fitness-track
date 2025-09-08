# Eureka Service Registry

This microservice provides service discovery for the Intellifit Fitness Track platform. It allows all microservices to register themselves and discover each other dynamically, enabling load balancing and failover.

## Features
- Service registry for all microservices
- Dynamic service discovery
- Health checks and status monitoring
- Integrates with Spring Cloud Eureka

## How It Works
- Microservices register themselves with Eureka at startup
- Eureka maintains a registry of all available services
- Services query Eureka to discover endpoints for other services
- Supports load balancing and failover

## Setup
1. Configure Eureka settings in `src/main/resources/application.yml`
2. Start the service:
   ```
   ./mvnw spring-boot:run
   ```
3. Ensure all other microservices are configured to register with Eureka

## Configuration
- All configs are managed via local `application.yml`
- Supports custom registry settings and health checks

---
See the main project README for more details.

