<script setup lang="ts">
import barba from '@barba/core';
// import { animate } from 'animejs';
import gsap from 'gsap';

onMounted(() => {
    //TODO page transition event move to Plugin or use nuxt native tranisiton effect
    // console.log('sddd');
    // barba.debug = true;
    // barba.init({
    //     transitions: [
    //         {
    //             name: 'opacity-transition',
    //             leave(data) {
    //                 console.log('data', data);
    //                 return gsap.to(data.current.container, {
    //                     opacity: 0,
    //                 });
    //             },
    //             enter(data) {
    //                 console.log('data', data);
    //                 return gsap.from(data.next.container, {
    //                     opacity: 0,
    //                 });
    //             },
    //         },
    //     ],
    // });
});
</script>

<template>
    <div data-barba="wrapper" class="wrapper">
        <div data-barba="container" data-barba-namespace="home">
            <div style="background: yellow" class="item">d</div>
            <div style="background: blue" class="item">d</div>
            <div style="background: palegreen" class="item">d</div>
        </div>
    </div>
</template>

<style scoped>
.item,
.wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
}
[data-barba='container'] {
    position: absolute;
    font-family: monospace;
    width: 100%;
    min-height: 100vh;
}
</style>
