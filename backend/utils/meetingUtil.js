const { v4: uuidv4 } = require("uuid");

exports.generateMeeting = () => {
  return `meeting-${uuidv4()}`;
};
