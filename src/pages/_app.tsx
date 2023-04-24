import type { AppProps } from 'next/app'
import '../../public/globals.css'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
