import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import { AnimatePresence } from 'framer-motion';
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center h-screen w-screen">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AnimatePresence >
        <Component {...pageProps} darkMode={darkMode} />
      </AnimatePresence>
    </div>
  )}
