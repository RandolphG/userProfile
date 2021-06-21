import { actions } from "../actions";
import { Exchanges } from "../types";

const initalState: Exchanges = {
  exchanges: [],
  selectedExchange: null,
  loading: true,
  error: null,
};

export const exchangeReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case actions.SELECT_EXCHANGE:
      return {
        ...state,
        selectedExchange: action.payload,
        error: null,
      };

    case actions.FETCH_EXCHANGES:
      return {
        ...state,
        loading: false,
        exchanges: action.payload,
        selectedExchange: action.payload[0],
        error: null,
      };

    case actions.FETCH_EXCHANGES_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return {
        ...state,
      };
  }
};
