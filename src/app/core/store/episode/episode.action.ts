import { createAction, props } from '@ngrx/store';

export const GetAllEpisodeStart = createAction(
  '[Episode] Get All Episodes Start',
  props<{ movieId: any }>()
);
export const GetAllEpisodeSuccess = createAction(
  '[Episode] Get All Episodes Success',
  props<{ episodes: any }>()
);
export const GetAllEpisodeFailure = createAction(
  '[Episode] Get All Episodes Failure',
  props<{ error: any }>()
);

export const GetEpisodeStart = createAction(
  '[Episode] Get Episode Start',
  props<{ episodeId: number }>()
);
export const GetEpisodeSuccess = createAction(
  '[Episode] Get Episode Success',
  props<{ episode: any }>()
);
export const GetEpisodeFailure = createAction(
  '[Episode] Get Episode Failure',
  props<{ error: any }>()
);