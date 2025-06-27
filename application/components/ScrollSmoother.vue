<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Subject, type Observable, type Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

interface TriggerInfo {
    selector: string;
    start?: string;
    end?: string;
}
const scrollTriggers: Array<TriggerInfo> = [
    {
        selector: '.page-2',
        start: 'top 60%-=100px',
        end: 'top 50%+=100px',
    },
    {
        selector: '.page-3',
        start: 'top 60%-=100px',
        end: 'top 50%+=100px',
    },
];
const unSubscribes: Array<Subscription> = [];

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const smoother: ScrollSmoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
    });

    const scrollToSelector = (selector: string) => {
        smoother.scrollTo(selector, true, 'top top');
    };

    scrollTriggers.forEach(trigger => {
        const subscriber = createScrollObservable(trigger)
            .pipe(throttleTime(700))
            .subscribe(() => scrollToSelector(trigger.selector));
        unSubscribes.push(subscriber);
    });
});

onUnmounted(() => {
    unSubscribes.forEach(subscriber => subscriber.unsubscribe());
});

function createScrollObservable(trigger: TriggerInfo): Observable<number> {
    const subject$ = new Subject<number>();

    const scrollTrigger = ScrollTrigger.create({
        trigger: trigger.selector,
        scrub: true, // smooth linking to scroll
        markers: true,
        onUpdate: self => subject$.next(self.progress),
    });
    if (trigger.end) {
        scrollTrigger.vars.end = trigger.end;
    }
    if (trigger.start) {
        scrollTrigger.vars.start = trigger.start;
    }
    return subject$.asObservable();
}
</script>

<template>
    <div id="smooth-wrapper" ref="wrapper">
        <div id="smooth-content">
            <div style="background: yellow" class="page-1 item">
                <div class="illust">
                    <img
                        src="https://osakamania.jp/assets_mt/mania/okonomiyaki/bddb7955b79d8ce0bfccb47a2fce1b7254784906.png"
                        alt=""
                    />
                </div>
            </div>
            <div style="background: blue" class="page-2 item">
                <div class="illust">
                    <img
                        src="https://osakamania.jp/assets_mt/mania/omelet-rice/04c9b2871ac23af6fbad8bf0cdb9f46e1e0331ee.png"
                        alt=""
                        class="set-src"
                    />
                </div>
            </div>
            <div style="background: palegreen" class="page-3 item">
                <div class="illust page-3">
                    <img src="https://osakamania.jp/assets_mt/mania/oimo-sweets  /main.png" alt="" class="set-src" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.illust {
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
}
img {
    max-width: 100%;
    width: 50%;
    height: auto;
}
.item {
    width: 100%;
    height: 100vh;
    position: relative;
}

#smooth-content {
    overflow: visible;
    width: 100%;
}

.line {
    visibility: hidden;
    width: 2px;
    height: 4000px;
    position: absolute;
    left: 400px;
    top: 0px;
    background-color: #777;
}

</style>
