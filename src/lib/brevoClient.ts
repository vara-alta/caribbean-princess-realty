import axios from "axios";

// Create Axios instance for Brevo
const brevoClient = axios.create({
  baseURL: "https://api.brevo.com/v3", // Base URL for Brevo's API
  headers: {
    "Content-Type": "application/json",
    "api-key": process.env.BREVO_API_KEY, // API key from .env file
  },
});

export default brevoClient;
