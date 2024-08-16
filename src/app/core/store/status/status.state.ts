export interface IStatusState {
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  status: any;
  error: any;
}

export const initialStatusesState: IStatusState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  status: null,
  error: null,
};
