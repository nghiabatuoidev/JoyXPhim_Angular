import { createAction, props } from "@ngrx/store";

export const GetMovieStart = createAction (
    '[Movie] Get Movie Start',
    props<{movieId: number}>()
)
export const GetMovieSuccess = createAction (
    '[Movie] Get Movie Success',
    props<{movie: any}>()
)
export const GetMovieFailure  = createAction (
    '[Movie] Get Movie Failure',
    props<{ error: any }>()
)
//movies
export const GetAllMovieStart = createAction(
    '[Movies] Get All Movie Start',
    props<{ page: number, pageSize: number}>()
)
export const GetAllMovieSuccess = createAction(
    '[Movies] Get All Movie Success',
    props<{ movie: any }>()
)
export const GetAllMovieFailure = createAction(
    '[Movies] Get All Movie Failure',
    props<{ error: any }>()
)



