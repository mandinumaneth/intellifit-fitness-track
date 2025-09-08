package com.fitness.aiservice.controller;


import com.fitness.aiservice.model.Recommendation;
import com.fitness.aiservice.service.RecommendationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recommendations")
public class RecommendationController {
    private final RecommendationService recommendationService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Recommendation>> getUserRecommendation(@PathVariable String userId) {
        return ResponseEntity.ok(recommendationService.getUserRecommendations(userId));
    }

    @GetMapping("/activity/{activityId}")
    public ResponseEntity<?> getActivityRecommendation(@PathVariable String activityId) {
        try {
            Recommendation recommendation = recommendationService.getActivityRecommendations(activityId);
            return ResponseEntity.ok(recommendation);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body("Recommendation not found for activity: " + activityId);
        }
    }

    @GetMapping("/activity/{activityId}/full")
    public ResponseEntity<?> getActivityWithRecommendation(@PathVariable String activityId) {
        try {
            Recommendation recommendation = recommendationService.getActivityRecommendations(activityId);
            // Fetch activity details from activityservice
            org.springframework.web.client.RestTemplate restTemplate = new org.springframework.web.client.RestTemplate();
            String url = "http://localhost:8082/api/activities/" + activityId;
            Object activity = restTemplate.getForObject(url, Object.class);
            java.util.Map<String, Object> result = new java.util.HashMap<>();
            result.put("activity", activity);
            result.put("recommendation", recommendation);
            return ResponseEntity.ok(result);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body("Recommendation or activity not found for activity: " + activityId);
        }
    }
}
