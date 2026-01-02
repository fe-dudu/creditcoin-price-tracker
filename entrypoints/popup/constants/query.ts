import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { getBithumbLastPrice } from '../apis/bithumb';
import { getBybitLastPrice } from '../apis/bybit';
import { getCoinoneLastPrice } from '../apis/coinone';
import { getGateioLastPrice } from '../apis/gateio';
import { getKrakenLastPrice } from '../apis/kraken';
import { getKucoinLastPrice } from '../apis/kucoin';
import { getOkxLastPrice } from '../apis/okx';
import { getUpbitLastPrice } from '../apis/upbit';

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
