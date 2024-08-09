export interface AuthState {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  user: any;
  error:any;
  
}

export const initialState: AuthState = {
  isFetching: false,
  isSuccess: false,
  isError:false,
  user: null,
  error: null
};
  