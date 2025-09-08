import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";
import { setCredentials } from "./store/authSlice";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import ActivityDetail from "./components/ActivityDetail";

const ActvitiesPage = () => {
  return (
    <Box sx={{ p: 2, border: "1px dashed grey" }}>
      <ActivityForm onActivityAdded={() => window.location.reload()} />
      <ActivityList />
    </Box>
  );
};

function App() {
  const { token, tokenData, logIn, logOut, isAuthenticated } =
    useContext(AuthContext);
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }));
      setAuthReady(true);
    }
  }, [token, tokenData, dispatch]);

  return (
    <Router>
      {!token ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#1976d2",
                letterSpacing: 2,
                mb: 1,
              }}
            >
              IntelliFit
            </Typography>
            <Typography variant="h5" sx={{ color: "#555", mb: 2 }}>
              Your Modern Fitness Recommendation
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 3, color: "#888" }}>
              Please login to access your activities
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              logIn();
            }}
          >
            LOGIN
          </Button>
        </Box>
      ) : (
        // <div>
        //   <pre>{JSON.stringify(tokenData, null, 2)}</pre>
        //   <pre>{JSON.stringify(token, null, 2)}</pre>
        // </div>

        <Box sx={{ p: 0, minHeight: "100vh", bgcolor: "#f5f7fa" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              py: 2,
              bgcolor: "#1976d2",
              color: "#fff",
              boxShadow: 1,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: 2 }}>
              IntelliFit
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={logOut}
              sx={{
                borderWidth: 2,
                fontWeight: 600,
                borderRadius: 2,
                bgcolor: "#fff",
                color: "#1976d2",
                borderColor: "#1976d2",
                "&:hover": {
                  bgcolor: "#e3f2fd",
                  borderColor: "#1565c0",
                  color: "#1565c0",
                },
              }}
            >
              Logout
            </Button>
          </Box>
          <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, p: 2 }}>
            <Routes>
              <Route path="/activities" element={<ActvitiesPage />} />
              <Route path="/activities/:id" element={<ActivityDetail />} />
              <Route
                path="/"
                element={
                  token ? (
                    <Navigate to="/activities" replace />
                  ) : (
                    <div>Welcome! Please Login.</div>
                  )
                }
              />
            </Routes>
          </Box>
        </Box>
      )}
    </Router>
  );
}

export default App;
