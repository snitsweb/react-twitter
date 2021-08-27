import {call, takeLatest, put} from 'redux-saga/effects'
import {setTags, setTagsLoadingState, TagsActionsType} from "./actionCreators";
import {LoadingState, Tag} from "./contracts/state";
import {TagsApi} from "../../../services/api/tagsApi";

export function* fetchTagsRequest() {
    try {
        const items: Tag[] = yield call(TagsApi.fetchTweets);
        yield put(setTags(items))
    } catch (e) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }

}

export function* TagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}