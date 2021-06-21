import { actions } from ".";
import FinnhubClient from "../api/FinnhubClient";
import {
  currentDateToSeconds,
  dateToTimestampSeconds,
  subtractDaysFromDateNow,
  subtractMonthsFromDateNow,
} from "../utils";

export const fetchStockQuoteSync = (stockSymbol = "AAPL") => (
  dispatch: any
) => {
  FinnhubClient.get("/quote", {
    params: { symbol: stockSymbol },
  })
    .then((response) =>
      dispatch({
        type: actions.FETCH_STOCK_QUOTE,
        payload: { symbol: stockSymbol, quote: response.data },
      })
    )
    .catch((error) =>
      dispatch({ type: actions.FETCH_STOCK_QUOTE_ERROR, payload: error })
    );
};

export const fetchStockQuote = (stockSymbol = "AAPL") => async (
  dispatch: any
) => {
  try {
    const response = await FinnhubClient.get("/quote", {
      params: { symbol: stockSymbol },
    });
    dispatch({
      type: actions.FETCH_STOCK_QUOTE,
      payload: { symbol: stockSymbol, quote: response.data },
    });
  } catch (error) {
    dispatch({ type: actions.FETCH_STOCK_QUOTE_ERROR, payload: error });
  }
};

export const fetchSymbols = (exchangeName = "COINBASE") => async (
  dispatch: any
) => {
  try {
    const response = await FinnhubClient.get("/crypto/symbol", {
      params: { exchange: exchangeName },
    });
    if (Array.isArray(response.data))
      dispatch({ type: actions.FETCH_SYMBOLS, payload: response.data });
    else
      throw Error(
        "Symbol Response is not correct, please check connection to the Finnhub"
      );
  } catch (error) {
    dispatch({ type: actions.FETCH_SYMBOLS_ERROR, payload: error });
  }
};

export const fetchExchanges = () => async (dispatch: any) => {
  try {
    const response = await FinnhubClient.get("/crypto/exchange");
    if (Array.isArray(response.data)) {
      dispatch({ type: actions.FETCH_EXCHANGES, payload: response.data });
      //dispatch({ type: actions.RESET_CURRENCIES_STATE });
    } else
      throw Error(
        "Exchange Response is not correct, please check connection to the Finnhub"
      );
  } catch (error) {
    dispatch({ type: actions.FETCH_EXCHANGES_ERROR, payload: error });
  }
};

export const fetchCryptoCandlesDays = (
  stockSymbol = "AAPL",
  days = 365
) => async (dispatch: any) => {
  try {
    const fromDate = subtractDaysFromDateNow(days);
    const fromTime = dateToTimestampSeconds(fromDate);
    const toTime = currentDateToSeconds();

    const response = await FinnhubClient.get("/crypto/candle", {
      params: {
        symbol: stockSymbol,
        resolution: "D",
        from: fromTime,
        to: toTime,
      },
    });
    dispatch({ type: actions.FETCH_CRYPTO_CANDLE, payload: response.data });
  } catch (error) {
    dispatch({ type: actions.FETCH_CRYPTO_CANDLE_ERROR, payload: error });
  }
};

export const fetchCryptoCandlesMonths = (
  stockSymbol = "AAPL",
  months = 12
) => async (dispatch: any) => {
  try {
    const fromDate = subtractMonthsFromDateNow();
    const fromTime = dateToTimestampSeconds(fromDate);
    const toTime = currentDateToSeconds();

    const response = await FinnhubClient.get("/crypto/candle", {
      params: {
        symbol: stockSymbol,
        resolution: "M",
        from: fromTime,
        to: toTime,
      },
    });
    dispatch({ type: actions.FETCH_CRYPTO_CANDLE, payload: response.data });
  } catch (error) {
    dispatch({ type: actions.FETCH_CRYPTO_CANDLE_ERROR, payload: error });
  }
};
