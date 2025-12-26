import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Creditcoin Price Tracker',
    description: 'Real-time Creditcoin (CTC) price tracking with automatic updates every 5 seconds.',
    host_permissions: [
      'https://www.okx.com/api/v5/market/ticker?instId=CTC-USD',
      'https://api.kraken.com/0/public/Ticker?pair=CTCUSD',
      'https://api.bybit.com/v5/market/tickers?category=spot&symbol=CTCUSDT',
      'https://api.gateio.ws/api/v4/spot/tickers?currency_pair=CTC_USDT',
      'https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=CTC-USDT',
      'https://api.upbit.com/v1/ticker?markets=KRW-CTC',
      'https://api.bithumb.com/public/ticker/CTC_KRW',
      'https://api.coinone.co.kr/public/v2/ticker_new/KRW/CTC',
    ],
    permissions: ['storage'],
  },
  vite: () => ({
    plugins: [react(), tailwindcss()],
  }),
});
