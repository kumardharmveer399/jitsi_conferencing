import axios from "axios";

export const createMeeting = async () => {
  return await axios.get("http://localhost:5000/api/meeting/generate");
};