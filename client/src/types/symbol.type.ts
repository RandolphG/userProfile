export interface Symbol {
  description: string;
  displaySymbol: string;
  symbol: string;
}

export interface Symbols {
  symbols: Symbol[];
  favoriteSymbols: Symbol[];
  selectedSymbol: string | null;
  loading: boolean;
  error: any;
}
