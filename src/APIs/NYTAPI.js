import axios from "axios";

const nytAPI = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  params: {
    "api-key": process.env.REACT_APP_NYTIMES_API_KEY,
    fl: "abstract,web_url,section_name,lead_paragraph,multimedia"
  }
});

export default nytAPI;
