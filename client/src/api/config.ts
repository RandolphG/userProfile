interface Config {
  baseUrl: string;
  apiKey: string;
  MAX_FETCH_SYMBOLS: number;
  wss: string;
}

const config: Config = {
  baseUrl: "https://finnhub.io/api/v1/",
  apiKey: "c046pvn48v6u76cj1pc0",
  MAX_FETCH_SYMBOLS: 10,
  wss: "wss://ws.finnhub.io?token=c046pvn48v6u76cj1pc0",
};

export default config;
