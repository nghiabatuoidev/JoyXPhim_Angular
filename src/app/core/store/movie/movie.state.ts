export interface IMovieState {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  movie: any;
  error: any;
}

export const initialMoviesState : IMovieState = {
    isFetching: false, 
    isSuccess: false,
    isError:false,
    movie: null,
    error: null
}
export const initialMovieState : IMovieState = {
  isFetching: false, 
  isSuccess: false,
  isError:false,
  movie: null,
  error: null
}
