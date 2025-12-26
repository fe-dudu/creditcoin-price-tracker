export const API_URLS = {
  OKX: 'https://www.okx.com/api/v5/market/ticker?instId=CTC-USD',
  COINONE: 'https://api.coinone.co.kr/public/v2/ticker_new/KRW/CTC',
  BITHUMB: 'https://api.bithumb.com/public/ticker/CTC_KRW',
  UPBIT: 'https://api.upbit.com/v1/ticker?markets=KRW-CTC',
  GATEIO: 'https://api.gateio.ws/api/v4/spot/tickers?currency_pair=CTC_USDT',
  KUCOIN: 'https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=CTC-USDT',
  BYBIT: 'https://api.bybit.com/v5/market/tickers?category=spot&symbol=CTCUSDT',
  KRAKEN: 'https://api.kraken.com/0/public/Ticker?pair=CTCUSD',
} as const;

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export type QuoteAsset = 'KRW' | 'USDT' | 'USD';

export interface LastPrice {
  price: string;
  quoteAsset: QuoteAsset;
  exchange: string;
}
