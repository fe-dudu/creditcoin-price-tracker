import { useAtom } from 'jotai';

import { QuoteAsset } from '@/apis';
import { tabsAtom } from '@/entrypoints/popup/stores/tabsAtom';
import { cn } from '@/libs/cn';

const QUOTE_ASSETS: QuoteAsset[] = ['USD', 'USDT', 'KRW'];

export function FilterTabs() {
  const [tabs, setTabs] = useAtom(tabsAtom);

  const toggleTab = async (quoteAsset: QuoteAsset) => {
    setTabs(async (prevTabs) => {
      const prev = await prevTabs;
      if (prev.includes(quoteAsset) && prev.length <= 1) {
        return prev;
      }
      if (prev.includes(quoteAsset)) {
        return prev.filter((tab) => tab !== quoteAsset);
      }
      return [...prev, quoteAsset];
    });
  };

  return (
    <div className="flex gap-2">
      {QUOTE_ASSETS.map((quoteAsset) => (
        <button
          key={quoteAsset}
          type="button"
          onClick={() => toggleTab(quoteAsset)}
          className={cn(
            'px-3 py-2 rounded-lg text-xs font-bold transition-all',
            tabs.includes(quoteAsset)
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground',
          )}
        >
          {quoteAsset}
        </button>
      ))}
    </div>
  );
}
