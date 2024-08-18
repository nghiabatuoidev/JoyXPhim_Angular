export interface IEpisodeState {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  episode: any;
  episodes: any;
  error: any;
}

export const initialEpisodeState: IEpisodeState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  episodes: null,
  episode: null,
  error: null,
};
