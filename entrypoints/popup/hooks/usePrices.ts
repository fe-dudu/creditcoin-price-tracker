import { useQueries } from '@tanstack/react-query';

import {
  bithumbQueryOptions,
  bybitQueryOptions,
  coinoneQueryOptions,
  gateioQueryOptions,
  krakenQueryOptions,
  kucoinQueryOptions,
  okxQueryOptions,
  upbitQueryOptions,
} from '@/entrypoints/popup/constants/query';

export function usePrices() {
  return useQueries({
    queries: [
      okxQueryOptions,
      krakenQueryOptions,
      bybitQueryOptions,
      gateioQueryOptions,
      kucoinQueryOptions,
      upbitQueryOptions,
      bithumbQueryOptions,
      coinoneQueryOptions,
    ],
  });
}
