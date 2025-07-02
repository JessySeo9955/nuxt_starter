<script setup lang="ts">
import ScrollSmoother from '@/components/ScrollSmoother.vue';
definePageMeta({
    layout: 'default',
    scrollToTop: true,
});
</script>

<template>
    <NuxtLayout>
        <h1>Welcome to Gallery</h1>
        <client-only>
            <ScrollSmoother></ScrollSmoother>
        </client-only>
    </NuxtLayout>
</template>
