import { initialAuthState } from "./auth.state";

const _authReducer = createReducer(
    initialAuthState,
    on(login, (state, { user }) => ({
      ...state,
      user,
      isLoggedIn: true
    })),
    on(logout, state => ({
      ...state,
      user: null,
      isLoggedIn: false
    }))
  );
  
  export function authReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
  }

function createReducer(initialAuthState: any, arg1: any, arg2: any) {
    throw new Error("Function not implemented.");
}
