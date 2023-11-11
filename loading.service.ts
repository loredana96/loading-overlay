import { BehaviorSubject, Subject } from "rxjs";

const loading$ = new BehaviorSubject(true);

export default {
    showLoading: () => loading$.next(true),
    hideLoading: () => loading$.next(false),
    loadingStatus$: loading$.asObservable()
};