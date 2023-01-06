import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import { AnimatePresence } from 'framer-motion';
import { useState } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="relative h-full w-full">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AnimatePresence >
        <Component key={router.pathname} {...pageProps} darkMode={darkMode} />
      </AnimatePresence>
    </div>
  )}
