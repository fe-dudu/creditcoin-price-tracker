import { useQueries } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { QuoteAsset } from '../apis';
import {
  bithumbQueryOptions,
  bybitQueryOptions,
  coinoneQueryOptions,
  gateioQueryOptions,
  krakenQueryOptions,
  kucoinQueryOptions,
  okxQueryOptions,
  upbitQueryOptions,
} from '../constants/query';
import { tabsAtom } from '../stores/tabsAtom';

const queries = [
  { quoteAsset: 'USD', options: okxQueryOptions },
  { quoteAsset: 'USD', options: krakenQueryOptions },
  { quoteAsset: 'USDT', options: bybitQueryOptions },
  { quoteAsset: 'USDT', options: gateioQueryOptions },
  { quoteAsset: 'USDT', options: kucoinQueryOptions },
  { quoteAsset: 'KRW', options: upbitQueryOptions },
  { quoteAsset: 'KRW', options: bithumbQueryOptions },
  { quoteAsset: 'KRW', options: coinoneQueryOptions },
];

export function usePrices() {
  const tabs = useAtomValue(tabsAtom);

  return useQueries({
    queries: queries.filter(({ quoteAsset }) => tabs.includes(quoteAsset as QuoteAsset)).map(({ options }) => options),
  });
}
