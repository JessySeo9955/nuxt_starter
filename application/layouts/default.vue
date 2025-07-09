<script setup lang="ts">
import SiteHeader from '@/components/common/SiteHeader.vue';
</script>

<template>
    <GlobalSpinner />
    <div class="container">
        <SiteHeader />
        <slot />
    </div>
</template>
