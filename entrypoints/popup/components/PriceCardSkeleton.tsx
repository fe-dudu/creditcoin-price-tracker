import { RefreshCw } from 'lucide-react';

export function PriceCardSkeleton() {
  return (
    <div className="group relative h-25 overflow-hidden rounded-xl border border-zinc-800/50 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative space-y-1 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="h-4 w-16 animate-pulse rounded bg-zinc-700/50" />
          <div className="flex items-center gap-2">
            <div className="h-6.5 w-18 animate-pulse rounded-md bg-zinc-700/50" />
            <button
              type="button"
              className="group/btn flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 p-1.5 text-zinc-400"
              disabled={true}
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="h-6 w-20 animate-pulse rounded bg-zinc-700/50" />
        <div className="h-3 w-52 animate-pulse rounded bg-zinc-700/50" />
      </div>
    </div>
  );
}
