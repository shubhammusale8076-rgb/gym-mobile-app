import { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/lib/authService';

export const useAuth = () => {
  const router = useRouter();
  const { 
    user, 
    accessToken, 
    isLoading, 
    hasSeenWelcome,
    setAuth, 
    clearAuth, 
    setHasSeenWelcome,
    setLoading 
  } = useAuthStore();

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const { user, token } = await authService.login(email, password);
      await setAuth(user, token);
      router.replace('/(tabs)');
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setAuth, setLoading, router]);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await authService.logout();
      await clearAuth();
      router.replace('/(auth)/log-in');
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      setLoading(false);
    }
  }, [clearAuth, setLoading, router]);

  const completeWelcome = useCallback(async () => {
    await setHasSeenWelcome(true);
    router.replace('/(auth)/log-in');
  }, [setHasSeenWelcome, router]);

  return {
    user,
    accessToken,
    isLoading,
    hasSeenWelcome,
    isAuthenticated: !!accessToken,
    login,
    logout,
    completeWelcome,
  };
};
