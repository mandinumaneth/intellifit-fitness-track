import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getActivityDetailFull } from "../services/api";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

const ActivityDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    const fetchActivityDetail = async () => {
      try {
        const response = await getActivityDetailFull(id); // call new endpoint
        setActivity(response.data.activity);
        setRecommendation(response.data.recommendation);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActivityDetail();
  }, [id]);

  if (!activity || !recommendation) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Card sx={{ mb: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#1976d2", mb: 2 }}
          >
            Activity Details
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Type: <b>{activity.type || recommendation.activityType}</b>
          </Typography>
          <Typography sx={{ mb: 1 }}>
            Duration: <b>{activity.duration || recommendation.duration}</b> min
          </Typography>
          <Typography sx={{ mb: 1 }}>
            Calories Burned:{" "}
            <b>
              {activity.caloriesBurned || recommendation.caloriesBurned}
            </b>
          </Typography>
          <Typography sx={{ mb: 1 }}>
            Date:{" "}
            <b>
              {new Date(
                activity.createdAt || recommendation.createdAt
              ).toLocaleString()}
            </b>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ boxShadow: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, color: "#1976d2", mb: 2 }}
          >
            AI Recommendation
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Analysis
          </Typography>
          <Typography paragraph>{recommendation.recommendation}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Improvements
          </Typography>
          {recommendation?.improvements?.map((improvement, index) => (
            <Typography key={index} paragraph>
              • {improvement}
            </Typography>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Suggestions
          </Typography>
          {recommendation?.suggestions?.map((suggestion, index) => (
            <Typography key={index} paragraph>
              • {suggestion}
            </Typography>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Safety Guidelines
          </Typography>
          {recommendation?.safety?.map((safety, index) => (
            <Typography key={index} paragraph>
              • {safety}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ActivityDetail;
