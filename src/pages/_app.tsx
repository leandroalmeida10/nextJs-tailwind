import type { AppProps } from 'next/app'
import '../styles/global.css'

import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
