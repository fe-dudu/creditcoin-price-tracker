import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { storage } from '@/entrypoints/popup/libs/storage.ts';
import App from './App.tsx';
import './style.css';

const queryClient = new QueryClient();

const asyncStoragePersister = createAsyncStoragePersister({
  storage: storage,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: asyncStoragePersister }}>
      <App />
    </PersistQueryClientProvider>
  </React.StrictMode>,
);
