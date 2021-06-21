import { Currencies } from "./currency.type";
import { Exchanges } from "./exchange.type";
import { Symbols } from "./symbol.type";

export interface Store {
  currenciesState: Currencies;
  exchangesState: Exchanges;
  symbolsState: Symbols;
}
