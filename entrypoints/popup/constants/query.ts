import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { getBithumbLastPrice } from '@/entrypoints/popup/apis/bithumb';
import { getBybitLastPrice } from '@/entrypoints/popup/apis/bybit';
import { getCoinoneLastPrice } from '@/entrypoints/popup/apis/coinone';
import { getGateioLastPrice } from '@/entrypoints/popup/apis/gateio';
import { getKrakenLastPrice } from '@/entrypoints/popup/apis/kraken';
import { getKucoinLastPrice } from '@/entrypoints/popup/apis/kucoin';
import { getOkxLastPrice } from '@/entrypoints/popup/apis/okx';
import { getUpbitLastPrice } from '@/entrypoints/popup/apis/upbit';

const QUERY_KEYS = {
  bithumb: ['last-price', 'bithumb'],
  bybit: ['last-price', 'bybit'],
  coinone: ['last-price', 'coinone'],
  gateio: ['last-price', 'gateio'],
  kraken: ['last-price', 'kraken'],
  kucoin: ['last-price', 'kucoin'],
  okx: ['last-price', 'okx'],
  upbit: ['last-price', 'upbit'],
};

const SECOND = 1000;

export const bithumbQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.bithumb,
  queryFn: () => getBithumbLastPrice(),
  refetchInterval: 5 * SECOND,
  placeholderData: keepPreviousData,
});

export const bybitQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.bybit,
  queryFn: () => getBybitLastPrice(),
  placeholderData: keepPreviousData,
  refetchInterval: 5 * SECOND,
});

export const coinoneQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.coinone,
  queryFn: () => getCoinoneLastPrice(),
  placeholderData: keepPreviousData,
  refetchInterval: 5 * SECOND,
});

export const gateioQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.gateio,
  queryFn: () => getGateioLastPrice(),
  placeholderData: keepPreviousData,
  refetchInterval: 5 * SECOND,
});

export const krakenQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.kraken,
  queryFn: () => getKrakenLastPrice(),
  placeholderData: keepPreviousData,
  refetchInterval: 5 * SECOND,
});

export const kucoinQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.kucoin,
  queryFn: () => getKucoinLastPrice(),
  placeholderData: keepPreviousData,
  refetchInterval: 5 * SECOND,
});

export const okxQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.okx,
  queryFn: () => getOkxLastPrice(),
  placeholderData: keepPreviousData,
  refetchInterval: 5 * SECOND,
});

export const upbitQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.upbit,
  queryFn: () => getUpbitLastPrice(),
  placeholderData: keepPreviousData,
  refetchInterval: 5 * SECOND,
});
