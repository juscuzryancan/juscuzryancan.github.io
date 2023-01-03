import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex ">
      <Navigation />
      <AnimatePresence >
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  )}
