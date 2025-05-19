import React from "react";

const JitsiFrame = ({ meetingURL }) => {
  return (
    <iframe
      src={meetingURL}
      allow="camera; microphone; fullscreen; display-capture"
      width="100%"
      height="600px"
      style={{ border: "0px" }}
      title="Jitsi Meeting"
    />
  );
};

export default JitsiFrame;
