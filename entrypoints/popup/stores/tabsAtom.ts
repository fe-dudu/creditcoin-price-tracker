import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { QuoteAsset } from '../apis';
import { storage } from '../libs/storage';

export const tabsAtom = atomWithStorage<QuoteAsset[]>(
  'tabs',
  ['USDT', 'USD', 'KRW'],
  createJSONStorage<QuoteAsset[]>(() => storage),
  {
    getOnInit: true,
  },
);
