import { API_URLS, ApiError, LastPrice } from '.';

interface OkxTickerResponse {
  code: string;
  msg: string;
  data: {
    instType: string;
    instId: string;
    last: string;
    lastSz: string;
    askPx: string;
    askSz: string;
    bidPx: string;
    bidSz: string;
    open24h: string;
    high24h: string;
    low24h: string;
    volCcy24h: string;
    vol24h: string;
    ts: string;
    sodUtc0: string;
    sodUtc8: string;
  }[];
}

export const getOkxLastPrice = async (): Promise<LastPrice> => {
  const response = await fetch(API_URLS.OKX);
  if (!response.ok) {
    throw new ApiError(response.statusText, response.status);
  }
  const result = (await response.json()) as OkxTickerResponse;
  return {
    price: result.data[0].last,
    quoteAsset: 'USD',
    exchange: 'OKX',
  };
};
