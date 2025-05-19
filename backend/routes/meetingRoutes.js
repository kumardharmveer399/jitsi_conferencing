const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

router.get("/generate", (req, res) => {
  const domain = process.env.JITSI_DOMAIN || "https://meet.jit.si";
  const roomId = `meeting-${uuidv4()}`;
  const meetingURL = `${domain}/${roomId}`;

  res.json({
    meetingRoom: roomId,
    meetingURL: meetingURL,
  });
});

module.exports = router;
