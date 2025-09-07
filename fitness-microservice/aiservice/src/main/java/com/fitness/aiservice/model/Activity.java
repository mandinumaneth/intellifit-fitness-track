package com.fitness.aiservice.model;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Map;

@Data

public class Activity {
    private String id;
    private String userId;
    private Integer duration; // in minutes
    private Integer caloriesBurned;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Map<String,Object> additionalMetrics; // e.g., distance, heart rate, etc.
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
