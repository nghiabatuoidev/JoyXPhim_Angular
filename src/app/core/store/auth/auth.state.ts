export interface AuthState {
    user: any;
    isLoggedIn: boolean;
  }
  
  export const initialAuthState: AuthState = {
    user: null,
    isLoggedIn: false
  };