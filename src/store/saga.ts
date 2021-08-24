import {tweetsSaga} from "./ducks/tweets/sagas";
import {all} from 'redux-saga/effects'


export default function* rootSaga () {
    yield all([tweetsSaga()])
}