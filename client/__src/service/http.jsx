import {Observable} from 'rxjs/Observable';
import 'whatwg-fetch';

const HOST = 'http://localhost:3090';
const get = (endpoint) => {
  Observable.fromPromise(fetch(HOST+endpoint, {method:'get'}))
    .flatMap(res => Observable.fromPromise(res.json()))
    .catch(err => Observable.of(new Error(err)))
};

export default {
  get,
};