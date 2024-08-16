export interface IGenreState {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  genre: any;
  error: any;
}

export const initialGenreState: IGenreState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  genre: null,
  error: null,
};
