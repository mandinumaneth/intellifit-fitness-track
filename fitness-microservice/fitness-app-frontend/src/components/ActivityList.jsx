import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getActivities } from "../services/api";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const fetchActivities = async () => {
    try {
      const response = await getActivities();
      setActivities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);
  return (
    <Grid container spacing={2} justifyContent="center">
      {activities.map((activity) => (
        <Grid key={activity.id}>
          <Card
            sx={{
              cursor: "pointer",
              boxShadow: 2,
              borderRadius: 2,
              p: 1,
              minWidth: 140,
              maxWidth: 180,
              transition: "0.2s",
              "&:hover": { boxShadow: 5, bgcolor: "#e3f2fd" },
            }}
            onClick={() => navigate(`/activities/${activity.id}`)}
          >
            <CardContent sx={{ p: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#1976d2", mb: 1 }}
              >
                {activity.type}
              </Typography>
              <Typography sx={{ mb: 0.5 }}>
                Duration: <b>{activity.duration}</b> min
              </Typography>
              <Typography sx={{ mb: 0.5 }}>
                Calories: <b>{activity.caloriesBurned}</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ActivityList;
