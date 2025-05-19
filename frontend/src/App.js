import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import JitsiFrame from "./components/JitsiFrame";
import { createMeeting } from "./api";

function App() {
  const [roomName, setRoomName] = useState(null);
  const [loading, setLoading] = useState(false);

  const [meetingURL, setMeetingURL] = useState(null);

  // const handleCreateMeeting = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await createMeeting();
  //     setRoomName(res.data.roomName);
  //   } catch (error) {
  //     console.error("Failed to create meeting", error);
  //   }
  //   setLoading(false);
  // };
  const handleCreateMeeting = async () => {
    setLoading(true);
    try {
      const res = await createMeeting();
      setMeetingURL(res.data.meetingURL);
    } catch (error) {
      console.error("Failed to create meeting", error);
    }
    setLoading(false);
  };


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Jitsi Meet Local App</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {!meetingURL ? (
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Start Your Meeting
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateMeeting}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Start Meeting"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              Meeting URL: {meetingURL}
            </Typography>
            <JitsiFrame meetingURL={meetingURL} />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;