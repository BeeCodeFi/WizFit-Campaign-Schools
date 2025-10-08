import axios from "axios";

const API_BASE_URL = "https://api.devharlemwizardsinabox.com";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
      console.info(
        "[Auth] No auth token found — sending request without Authorization header"
      );
    }

    return config;
  },
  (error) => {
    console.error("[Request Error]", error.message);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    // Centralized error handling
    switch (status) {
      case 400:
        console.warn("Bad Request");
        break;
      case 401:
        console.warn("Unauthorized — maybe redirect to login");
        break;
      case 403:
        console.warn("Forbidden — insufficient permissions");
        break;
      case 404:
        console.warn("Resource not found");
        break;
      case 500:
        console.error("Server error — please try again later");
        break;
      default:
        console.error(`[API Error ${status || "Network"}]`, error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
