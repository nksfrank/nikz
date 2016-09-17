import Rx from 'rxjs/Observable';
import 'whatwg-fetch';

const Host = 'http://localhost:8081/api/';
const get = (endpoint) => {
  Observable.fromPromise(fetch(HOST+endpoint, {method:'get'}))
    .flatMap(res => Observable.fromPromise(res.json()))
    .catch(err => Observable.of(new Error(err)))
};

export default {
  get,
};