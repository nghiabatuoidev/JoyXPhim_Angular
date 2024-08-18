import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEpisodeState } from './episode.state';

export const selectepisodeState = createFeatureSelector<IEpisodeState>('episode');
export const selectAllEpisodes = createSelector(
    selectepisodeState,
  (state: IEpisodeState) => state.episodes || state.error
);
//
export const selectEpisode = createSelector(
    selectepisodeState,
  (state: IEpisodeState) => state.episode || state.error
);