import { PriceCard } from './components/PriceCard';
import { PriceCardSkeleton } from './components/PriceCardSkeleton';
import { usePrices } from './hooks/usePrices';
import { formatDecimalString } from './utils/decimal';

function App() {
  const prices = usePrices();
  return (
    <div className="w-full px-4 py-6 grid gap-4">
      {prices.map(({ data, dataUpdatedAt, refetch, isLoading, isFetching }, index) => {
        if (isLoading) {
          return <PriceCardSkeleton key={`skeleton-${dataUpdatedAt}-${index.toString()}`} />;
        }

        return (
          <PriceCard
            key={`price-card-${dataUpdatedAt}-${index.toString()}`}
            exchange={data?.exchange ?? 'Error occurred'}
            price={data?.price ? formatDecimalString(data.price) : '-'}
            quoteAsset={data?.quoteAsset}
            isFetching={isFetching}
            dataUpdatedAt={dataUpdatedAt}
            onRefresh={refetch}
          />
        );
      })}
    </div>
  );
}

export default App;
