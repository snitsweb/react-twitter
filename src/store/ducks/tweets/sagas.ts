import {call, takeLatest, put} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, Tweet} from "./contracts/state";

export function* fetchTweetsRequest() {
    try {
        const items: Tweet[] = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items))
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }

}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}