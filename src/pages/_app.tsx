import type { AppProps } from 'next/app'
import '../styles/global.css'
import { QueryClient, QueryClientProvider } from 'react-query'

import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
