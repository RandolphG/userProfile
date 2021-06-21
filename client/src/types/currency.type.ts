export interface Trade {
  s: number;
  p: number;
  t: number;
  v: number;
  c: number;
}

export interface Quote {
  c: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
}

export interface Candle {
  c: [];
  h: [];
  l: [];
  o: [];
  s?: string;
  t: [];
  v: [];
}
export interface Currency {
  symbol: string;
  price: number;
  quote?: Quote;
}

export interface Currencies {
  currencies: Currency[];
  candleData: Candle;
  selectedCurrency: Currency | null;
  error?: Error;
}
