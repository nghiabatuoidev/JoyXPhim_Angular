export interface ICategoryState {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    category: any;
    error: any;
  }
  
  export const initialCategoriesState : ICategoryState = {
      isFetching: false, 
      isSuccess: false,
      isError:false,
      category: null,
      error: null
  }