import { asyncScheduler, asapScheduler, animationFrameScheduler, interval, queueScheduler } from "rxjs";
import { takeWhile } from 'rxjs/operators';

import loadingService from "./loading.service";

const loadingOverlay = document.getElementById('loading-overlay');
const ball = document.getElementById('ball');
let infoText = document.getElementById('info-text');

loadingService.loadingStatus$.subscribe(isLoading => {
    if(isLoading) {
        loadingOverlay.classList.add('open');
    } else {
        loadingOverlay.classList.remove('open');
    }
})

queueScheduler.schedule(() => {
    queueScheduler.schedule(() => {
        queueScheduler.schedule(() => {
            queueScheduler.schedule(() => {
                interval(10, animationFrameScheduler).pipe(
                    takeWhile(val => val <= 500)).subscribe(val => {
                        ball.style.transform = `translate3d(0, ${val}px, 0)`;
                    }, 1000);
            }, 1000);
            infoText.innerHTML = 'Overlay hidden'
        }, 1000);
        infoText.innerHTML = 'Overlay loaded';
    }, 1000);
    asapScheduler.schedule(() => loadingService.hideLoading());
    infoText.innerHTML = 'Loading overlay';
}, 1000);
