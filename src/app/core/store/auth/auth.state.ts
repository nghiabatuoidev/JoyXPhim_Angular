export interface IAuthState {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  user: any;
  error:any;
  
}

export const initialState: IAuthState = {
  isFetching: false,
  isSuccess: false,
  isError:false,
  user: null,
  error: null
};
  