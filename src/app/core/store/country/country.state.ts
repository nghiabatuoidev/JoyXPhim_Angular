export interface ICountryState {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    country: any;
    error: any;
  }
  
  export const initialCountriesState : ICountryState = {
      isFetching: false, 
      isSuccess: false,
      isError:false,
      country: null,
      error: null
  }