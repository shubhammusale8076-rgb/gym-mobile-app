import React, { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import SplashScreen from './SplashScreen';
import { Redirect } from 'expo-router';

export default function EntryPoint() {
  const { initialize, isLoading, accessToken, hasSeenWelcome } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (isLoading) {
    return <SplashScreen />;
  }

  // If user hasn't seen welcome, show splash (with Get Started button)
  if (!hasSeenWelcome) {
    return <SplashScreen />;
  }

  // If user is logged in, go to tabs
  if (accessToken) {
    return <Redirect href="/(tabs)" />;
  }

  // Otherwise, go to login
  return <Redirect href="/(auth)/log-in" />;
}
