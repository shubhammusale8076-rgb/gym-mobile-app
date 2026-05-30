import { create } from 'zustand';
import { AuthState, User } from '@/types/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

interface AuthStore extends AuthState {
  setAuth: (user: User, token: string) => Promise<void>;
  clearAuth: () => Promise<void>;
  setHasSeenWelcome: (value: boolean) => Promise<void>;
  setLoading: (loading: boolean) => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  accessToken: null,
  isLoading: true,
  hasSeenWelcome: false,

  setAuth: async (user, token) => {
    await SecureStore.setItemAsync('accessToken', token);
    set({ user, accessToken: token });
  },

  clearAuth: async () => {
    await SecureStore.deleteItemAsync('accessToken');
    set({ user: null, accessToken: null });
  },

  setHasSeenWelcome: async (value) => {
    await AsyncStorage.setItem('hasSeenWelcome', JSON.stringify(value));
    set({ hasSeenWelcome: value });
  },

  setLoading: (loading) => set({ isLoading: loading }),

  initialize: async () => {
    try {
      const welcome = await AsyncStorage.getItem('hasSeenWelcome');
      const token = await SecureStore.getItemAsync('accessToken');
      
      // Mock user if token exists (in real app, you'd fetch user from API or decode JWT)
      let user: User | null = null;
      if (token) {
        user = {
          id: '1',
          email: 'admin@kinetix.com',
          name: 'Prem Admin',
          role: 'ADMIN',
        };
      }

      set({
        hasSeenWelcome: welcome ? JSON.parse(welcome) : false,
        accessToken: token,
        user,
        isLoading: false,
      });
    } catch (error) {
      console.error('Failed to initialize auth store', error);
      set({ isLoading: false });
    }
  },
}));
