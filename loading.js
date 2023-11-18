import { asyncScheduler, asapScheduler, animationFrameScheduler } from "rxjs";
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
asapScheduler.schedule(() => loadingService.hideLoading(), 2000);

queueMicrotask(() => infoText.innerHTML = 'Overlay loaded', 2000);

asyncScheduler.schedule(() => infoText.innerHTML = 'Overlay hidden', 2000);

setTimeout(() => infoText.innerHTML = 'Loading overlay', 4000);

animationFrameScheduler.schedule(function(position) {
    ball.style.transform = `translate3d(0, ${position}px, 0)`;
    if (position <= 500) {
        this.schedule(position +1);
    }
}, 3000, 0)
