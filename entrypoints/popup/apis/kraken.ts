import { API_URLS, ApiError, LastPrice } from '.';

interface KrakenTickerResponse {
  error: string[];
  result: {
    CTCUSD: {
      a: string[];
      b: string[];
      c: string[];
      v: string[];
      p: string[];
      t: number[];
      l: string[];
      h: string[];
      o: string;
    };
  };
}

export const getKrakenLastPrice = async (): Promise<LastPrice> => {
  const response = await fetch(API_URLS.KRAKEN);
  if (!response.ok) {
    throw new ApiError(response.statusText, response.status);
  }
  const result = (await response.json()) as KrakenTickerResponse;
  return {
    price: result.result.CTCUSD.c[0],
    quoteAsset: 'USD',
    exchange: 'Kraken',
  };
};
