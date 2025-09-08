# Config Server

This microservice provides centralized configuration management for all other microservices in the Intellifit Fitness Track platform. It allows you to manage application settings, environment variables, and secrets from a single location.

## Features
- Centralized configuration for all microservices
- Supports multiple profiles (dev, prod, etc.)
- Integrates with Spring Cloud Config
- Secure management of sensitive data

## How It Works
- Reads configuration files from local filesystem or remote repository
- Serves configuration to other services at startup and on refresh
- Allows dynamic updates to configuration without restarting services

## Setup
1. Configure your configuration files in `src/main/resources/` or a remote Git repository
2. Start the service:
   ```
   ./mvnw spring-boot:run
   ```
3. Point other microservices to the config server URL in their bootstrap configuration

## Configuration
- All configs are managed in this service and distributed to other services
- Supports environment variables and secrets

---
See the main project README for more details.

