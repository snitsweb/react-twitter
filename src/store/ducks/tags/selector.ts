import {LoadingState, TagsState} from "./contracts/state";
import {RootState} from "../../store";
import {createSelector} from "reselect";

export const selectTags = (state : RootState): TagsState => state.tags

export const selectLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState

export const selectTagsItems = createSelector(selectTags, tags => tags.items)

export const selectIsTagsLoaded = (state: RootState) : boolean => selectLoadingState(state) === LoadingState.LOADING