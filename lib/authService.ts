import { User } from '@/types/auth';

// Mock implementation for development
export const authService = {
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email === 'member@kinetix.club' && password === 'password') {
      return {
        user: {
          id: '1',
          email: 'member@kinetix.club',
          name: 'Shubham',
          role: 'ADMIN',
        },
        token: 'dummy-access-token',
      };
    }
    throw new Error('Invalid email or password');
  },

  logout: async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },

  forgotPassword: async (email: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Simulate success
  },

  isAuthenticated: async (token: string): Promise<boolean> => {
    return token === 'dummy-access-token';
  },
};
