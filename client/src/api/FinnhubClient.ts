import axios from "axios";
import config from "./config";

const FinnhubClient = axios.create({
  baseURL: config.baseUrl,
  params: { token: config.apiKey },
});

export default FinnhubClient;
