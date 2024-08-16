export interface ILangState {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    lang: any;
    error: any;
  }
  
  export const initialLangState: ILangState = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    lang: null,
    error: null,
  };
  