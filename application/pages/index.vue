<script setup lang="ts">
//import ScrollContent from '@/components/ScrollContent.vue';
import ScrollSmoother from '@/components/ScrollSmoother.vue';

definePageMeta({
    layout: 'default',
    scrollToTop: true,
});
</script>

<template>
    <client-only>
        <ScrollSmoother></ScrollSmoother>
    </client-only>
</template>

