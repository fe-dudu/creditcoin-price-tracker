import { API_URLS, ApiError, LastPrice } from '.';

interface GateioTickerResponse {
  currency_pair: string;
  last: string;
  lowest_ask: string;
  lowest_size: string;
  highest_bid: string;
  highest_size: string;
  change_percentage: string;
  base_volume: string;
  quote_volume: string;
  high_24h: string;
  low_24h: string;
}

export const getGateioLastPrice = async (): Promise<LastPrice> => {
  const response = await fetch(API_URLS.GATEIO);
  if (!response.ok) {
    throw new ApiError(response.statusText, response.status);
  }
  const result = (await response.json()) as GateioTickerResponse[];
  return {
    price: result[0].last,
    quoteAsset: 'USDT',
    exchange: 'Gate.io',
  };
};
