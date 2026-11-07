import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import CatalogoScreen from './screens/CatalogoScreen';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setMostrarSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return mostrarSplash ? <SplashScreen /> : <CatalogoScreen />;
}