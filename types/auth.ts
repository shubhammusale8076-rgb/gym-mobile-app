export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'TRAINER' | 'MEMBER';
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  hasSeenWelcome: boolean;
}
