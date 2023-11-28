import axios from "axios";

const guardianAPI = axios.create({
  baseURL: "https://content.guardianapis.com/",
  params: {
    "api-key": process.env.REACT_APP_GUARDIAN_API_KEY,
    "show-fields": "thumbnail,trailText"
  }
});

export default guardianAPI;
