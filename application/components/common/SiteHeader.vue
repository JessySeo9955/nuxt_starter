<script setup lang="ts">
const { availableLocales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <div>
        <div>
            <NuxtLink v-for="code in availableLocales" :key="code" :to="switchLocalePath(code)">
                {{ code }}
            </NuxtLink>
        </div>

        <h1>{{ $t('welcome') }}</h1>
    </div>
</template>
