import { RefreshCw } from 'lucide-react';

export function PriceCardSkeleton() {
  return (
    <div className="group relative h-25 overflow-hidden rounded-xl border border-border bg-card p-3 backdrop-blur-sm sm:p-4">
      <div className="relative space-y-1 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="h-4 w-16 animate-pulse rounded bg-muted" />
          <div className="flex items-center gap-2">
            <div className="h-6.5 w-18 animate-pulse rounded-md bg-muted" />
            <button
              type="button"
              className="group/btn flex items-center justify-center rounded-lg border border-border bg-muted p-1.5 text-muted-foreground"
              disabled={true}
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="h-6 w-20 animate-pulse rounded bg-muted" />
        <div className="h-3 w-52 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}
