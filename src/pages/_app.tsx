import type { AppProps } from 'next/app'
import '../styles/global.css'
import { QueryClient, QueryClientProvider } from 'react-query'

import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 30, // 30 seconds
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
