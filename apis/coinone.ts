import { API_URLS, ApiError, LastPrice } from '.';

interface CoinoneTickerResponse {
  result: string;
  error_code: string;
  server_time: number;
  tickers: {
    quote_currency: string;
    target_currency: string;
    timestamp: number;
    high: string;
    low: string;
    first: string;
    last: string;
    quote_volume: string;
    target_volume: string;
    best_asks: {
      price: string;
      qty: string;
    }[];
    best_bids: {
      price: string;
      qty: string;
    }[];
    id: string;
  }[];
}

export const getCoinoneLastPrice = async (): Promise<LastPrice> => {
  const response = await fetch(API_URLS.COINONE);
  if (!response.ok) {
    throw new ApiError(response.statusText, response.status);
  }
  const result = (await response.json()) as CoinoneTickerResponse;
  return {
    price: result.tickers[0].last,
    quoteAsset: 'KRW',
    exchange: 'Coinone',
  };
};
