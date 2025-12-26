import { API_URLS, ApiError, LastPrice } from '.';

interface KucoinTickerResponse {
  code: string;
  data: {
    time: number;
    sequence: string;
    price: string;
    size: string;
    bestBid: string;
    bestBidSize: string;
    bestAsk: string;
    bestAskSize: string;
  };
}

export const getKucoinLastPrice = async (): Promise<LastPrice> => {
  const response = await fetch(API_URLS.KUCOIN);
  if (!response.ok) {
    throw new ApiError(response.statusText, response.status);
  }
  const result = (await response.json()) as KucoinTickerResponse;
  return {
    price: result.data.price,
    quoteAsset: 'USDT',
    exchange: 'KuCoin',
  };
};
