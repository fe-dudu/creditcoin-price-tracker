import { API_URLS, ApiError, LastPrice } from '.';

interface BybitTickerResponse {
  retCode: number;
  retMsg: string;
  result: {
    category: string;
    list: {
      symbol: string;
      bid1Price: string;
      bid1Size: string;
      ask1Price: string;
      ask1Size: string;
      lastPrice: string;
      prevPrice24h: string;
      price24hPcnt: string;
      highPrice24h: string;
      lowPrice24h: string;
      turnover24h: string;
      volume24h: string;
      usdIndexPrice: string;
    }[];
  };
  retExtInfo: Record<string, unknown>;
  time: number;
}

export const getBybitLastPrice = async (): Promise<LastPrice> => {
  const response = await fetch(API_URLS.BYBIT);
  if (!response.ok) {
    throw new ApiError(response.statusText, response.status);
  }
  const result = (await response.json()) as BybitTickerResponse;
  return {
    price: result.result.list[0].lastPrice,
    quoteAsset: 'USDT',
    exchange: 'Bybit',
  };
};
