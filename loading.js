import { asyncScheduler } from "rxjs";
import loadingService from "./loading.service";

const loadingOverlay = document.getElementById('loading-overlay');

loadingService.loadingStatus$.subscribe(isLoading => {
    if(isLoading) {
        loadingOverlay.classList.add('open');
    } else {
        loadingOverlay.classList.remove('open');
    }
})

asyncScheduler.schedule(() => loadingService.hideLoading(), 7000);