<script setup lang="ts">
import ScrollSmoother from '@/components/ScrollSmoother.vue';
definePageMeta({
    layout: 'default',
    scrollToTop: true,
});
</script>

<template>
    <NuxtLayout>
        <client-only>
            <ScrollSmoother></ScrollSmoother>
        </client-only>
    </NuxtLayout>
</template>
