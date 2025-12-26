import { API_URLS, ApiError, LastPrice } from '.';

interface BithumbTickerResponse {
  status: string;
  data: {
    opening_price: string;
    closing_price: string;
    min_price: string;
    max_price: string;
    units_traded: string;
    acc_trade_value: string;
    prev_closing_price: string;
    units_traded_24H: string;
    acc_trade_value_24H: string;
    fluctate_24H: string;
    fluctate_rate_24H: string;
    date: string;
  };
}

export const getBithumbLastPrice = async (): Promise<LastPrice> => {
  const response = await fetch(API_URLS.BITHUMB);
  if (!response.ok) {
    throw new ApiError(response.statusText, response.status);
  }
  const result = (await response.json()) as BithumbTickerResponse;
  return {
    price: result.data.closing_price,
    quoteAsset: 'KRW',
    exchange: 'Bithumb',
  };
};
