import axios from "axios";

const API_KEY = "eo3wlmmy9uoAtJI6gu_XRO5K_8HtNqC8oee0gFuvgwU";
const BASE_URL = "https://api.unsplash.com/";

export const fetchImages = async ({ query, page }) => {
    const {data} = await axios.get(
    `${BASE_URL}photos`,
    {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
        params: {
           query, 
      page,  
      per_page: 12,
      },
    }
    );
    
    
 
  return data;
};