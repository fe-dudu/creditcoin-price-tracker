import { RefreshCw } from 'lucide-react';

import { QuoteAsset } from '@/apis';
import { cn } from '@/libs/cn';

interface Props {
  exchange: string;
  price: string;
  quoteAsset?: QuoteAsset;
  isFetching: boolean;
  dataUpdatedAt?: number;
  onRefresh: () => void;
}

export function PriceCard({ price, exchange, quoteAsset, isFetching, dataUpdatedAt, onRefresh }: Props) {
  return (
    <div className="group relative h-25 overflow-hidden rounded-xl border border-border bg-card p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-4">
      <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative space-y-1 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-card-foreground sm:text-base">{exchange}</h3>
          </div>
          <div className="flex items-center gap-2">
            {quoteAsset && (
              <span className="rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-xs font-medium text-primary">
                CTC/{quoteAsset}
              </span>
            )}

            <button
              type="button"
              className="group/btn flex items-center justify-center rounded-lg border border-border bg-muted p-1.5 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              onClick={onRefresh}
              disabled={isFetching}
            >
              <RefreshCw className={cn('h-3.5 w-3.5', isFetching ? 'animate-spin' : '')} />
            </button>
          </div>
        </div>

        <p className="text-lg font-bold tabular-nums text-card-foreground sm:text-xl wrap-break-word overflow-wrap-anywhere">
          {price}
        </p>
        {dataUpdatedAt && (
          <p className="text-xs text-muted-foreground">Updated: {new Date(dataUpdatedAt).toLocaleString()}</p>
        )}
      </div>
    </div>
  );
}
