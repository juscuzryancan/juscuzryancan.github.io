import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import { AnimatePresence } from 'framer-motion';
import { useState } from "react";
import clsx from 'clsx';

export default function App({ Component, pageProps, router }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={clsx(
      "relative h-full w-full",
      darkMode && "dark"
    )}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AnimatePresence >
        <Component key={router.pathname} {...pageProps} darkMode={darkMode} />
      </AnimatePresence>
    </div>
  )}
