export interface IYearReleaseState {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    yearRelease: any;
    error: any;
  }
  
  export const initialYearReleaseState: IYearReleaseState = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    yearRelease: null,
    error: null,
  };
  